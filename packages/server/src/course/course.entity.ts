import { Heatmap } from '@koh/common';
import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EventModel } from '../profile/event-model.entity';
import { UserCourseModel } from '../profile/user-course.entity';
import { QueueModel } from '../queue/queue.entity';
import { OfficeHourModel } from './office-hour.entity';
import { SemesterModel } from './semester.entity';
import { AlertModel } from '../alerts/alerts.entity';

/**
 * Represents a course in the context of office hours.
 * @param id - The id number of this Course.
 * @param name - The subject and course number of this course. Ex: "CS 2500"
 * @param semester - The semester of this course.
 */
/*interface Course {
    id: number;
    name: string;
    url: string;
    semester: Semester;
    users: UserCourse[]
}*/

@Entity('course_model')
export class CourseModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany((type) => OfficeHourModel, (oh) => oh.course)
  officeHours: OfficeHourModel[];

  @OneToMany((type) => QueueModel, (q) => q.course)
  queues: QueueModel[];

  @Column('text')
  name: string;

  @Column('text', { nullable: true })
  coordinator_email: string;

  @Column('text', { nullable: true })
  @Exclude()
  icalURL: string;

  @OneToMany((type) => UserCourseModel, (ucm) => ucm.course)
  @Exclude()
  userCourses: UserCourseModel;

  @ManyToOne((type) => SemesterModel, (semester) => semester.courses)
  @JoinColumn({ name: 'semesterId' })
  @Exclude()
  semester: SemesterModel;

  @Column({ nullable: true })
  @Exclude()
  // TODO: can we make these not nullable and work with TypeORM
  semesterId: number;

  @Column('boolean', { nullable: true })
  enabled: boolean; // Set to true if the given the course is using our app

  // Set to true if the course is submitted via application and pending approval
  @Column('boolean', { nullable: true })
  pending: boolean;

  // The heatmap is false when there havent been any questions asked yet or there havent been any office hours
  heatmap: Heatmap | false;

  // The IANA string representing the timezone the course is centered around. This is important for any time based events for a course
  @Column('text', { nullable: true })
  timezone: string;

  @OneToMany((type) => EventModel, (event) => event.course)
  @Exclude()
  events: EventModel[];

  @OneToMany((type) => AlertModel, (alert) => alert.course)
  @Exclude()
  alerts: AlertModel[];
}
