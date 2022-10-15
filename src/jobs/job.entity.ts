import {
  Column,
  Model,
  Table,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Skill } from 'src/skills/skill.entity';
import { Course } from 'src/courses/course.entity';
@Table
export class Job extends Model {
  @Column
  title: string;

  @Column
  description: string;

  @Column
  viewedUsers: string;

  @Column
  intrestedUsers: string;

  @Column
  salaryMin: string;

  @Column
  salaryMax: string;

  @Column
  imageUrl: string;

  @Column
  active: string;

  @HasMany(() => Skill)
  skills: Skill[];

  @ForeignKey(() => Course)
  @Column
  courseId: number;

  @BelongsTo(() => Course)
  course: Course;
}
