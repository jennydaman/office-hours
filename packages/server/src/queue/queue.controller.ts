import {
  Controller,
  Get,
  Param,
  NotFoundException,
  ClassSerializerInterceptor,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { Connection } from 'typeorm';
import { Not, In } from 'typeorm';
import { QueueModel } from './queue.entity';
import {
  GetQueueResponse,
  ListQuestionsResponse,
  ClosedQuestionStatus,
} from '@template/common';
import { QuestionModel } from '../question/question.entity';
import { JwtAuthGuard } from '../profile/jwt-auth.guard';

@Controller('queues')
@UseGuards(JwtAuthGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class QueueController {
  constructor(private connection: Connection) {}

  @Get(':queueId')
  async getQueue(@Param('queueId') queueId: string): Promise<GetQueueResponse> {
    return QueueModel.findOne(queueId, { relations: ['questions'] });
  }

  @Get(':queueId/questions')
  async getQuestions(
    @Param('queueId') queueId: string,
  ): Promise<ListQuestionsResponse> {
    // todo: need a way to return different data, if TA vs. student hits endpoint.
    // for now, just return the student response
    const queueSize = await QueueModel.count({
      where: { id: queueId },
    });
    // Check that the queue exists
    if (queueSize === 0) {
      throw new NotFoundException();
    }

    return await QuestionModel.find({
      where: [
        {
          queueId: queueId,
          status: Not(In(Object.values(ClosedQuestionStatus))),
        },
      ],
      relations: ['creator', 'taHelped'],
    });
  }
}
