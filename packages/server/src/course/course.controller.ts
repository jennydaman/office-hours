import {
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { GetCourseResponse, QueuePartial, Role } from '@template/common';
import { uniq } from 'lodash';
import { Connection } from 'typeorm';
import { JwtAuthGuard } from '../profile/jwt-auth.guard';
import { UserCourseModel } from '../profile/user-course.entity';
import { User } from '../profile/user.decorator';
import { UserModel } from '../profile/user.entity';
import { QueueModel } from '../queue/queue.entity';
import { CourseModel } from './course.entity';
import { QueueService } from '../queue/queue.service';

@Controller('courses')
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class CourseController {
  constructor(
    private connection: Connection,
    private queueService: QueueService,
  ) {}

  @Get(':id')
  async get(@Param('id') id: number): Promise<GetCourseResponse> {
    // TODO: for all course endpoint, check if they're a student or a TA
    const course = await CourseModel.findOne(id, {
      relations: [
        'officeHours',
        'queues',
        'queues.staffList',
        'queues.officeHours',
      ],
    });

    const now = new Date();
    const MS_IN_MINUTE = 60000;

    // Set all the queues which should be "Open"
    course.queues = course.queues.filter((queue) => {
      const areStaffPresent = queue.staffList.length > 0;
      if (areStaffPresent) {
        return true;
      }

      const currentOfficeHour = queue.officeHours.find(
        (e) =>
          e.startTime.valueOf() - 15 * MS_IN_MINUTE < now.valueOf() &&
          e.endTime.valueOf() + 1 * MS_IN_MINUTE > now.valueOf(),
      );
      // TODO: Remove the the time attribute from the queue
      if (currentOfficeHour) {
        queue.time = {
          start: currentOfficeHour.startTime,
          end: currentOfficeHour.endTime,
        };
      }
      return !!currentOfficeHour;
    });

    return course;
  }

  @Post(':id/ta_location/:room')
  async checkIn(
    @Param('id') courseId: number,
    @Param('room') room: string,
    @User() user: UserModel,
  ): Promise<QueuePartial> {
    // TODO: think of a neat way to make this abstracted
    const isTAInCourse =
      (await UserCourseModel.count({
        where: {
          role: Role.TA,
          courseId: courseId,
          userId: user.id,
        },
      })) === 1;

    if (!isTAInCourse) {
      throw new UnauthorizedException(
        "Can't check in to office hours for a course you're not a TA of!",
      );
    }

    let queue = await QueueModel.findOne(
      {
        room,
        courseId,
      },
      { relations: ['staffList'] },
    );

    if (!queue) {
      queue = await QueueModel.create({
        room,
        courseId,
        staffList: [],
      }).save();
    }

    queue.staffList.push(user);
    await queue.save();

    return queue;
  }

  @Delete(':id/ta_location/:room')
  async checkOut(
    @Param('id') courseId: number,
    @Param('room') room: string,
    @User() user: UserModel,
  ): Promise<void> {
    const queue = await QueueModel.findOne(
      {
        room,
        courseId,
      },
      { relations: ['staffList'] },
    );

    queue.staffList = queue.staffList.filter((e) => e.id !== user.id);
    await queue.save();

    // Clean up queue if necessary
    await this.queueService.cleanQueue(queue.id);
  }
}
