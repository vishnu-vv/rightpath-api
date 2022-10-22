import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
  HasMany,
  DataType,
} from 'sequelize-typescript';
import { Passion } from 'src/passions/passion.entity';
import { University } from 'src/universities/university.entity';
import { Job } from 'src/jobs/job.entity';

export enum Duration {
  'Less than 1 year' = 0,
  '1 year' = 1,
  '2 years' = 2,
  '3 years' = 3,
  '4 years' = 4,
  'More than 4 years' = 5,
}

@Table
export class Course extends Model {
  @Column
  title: string;

  @Column({ type: DataType.STRING(1000) })
  overview: string;
 
  @Column
  duration: Duration;

  @Column
  fee: number;

  @ForeignKey(() => University)
  @Column
  universityId: number;

  @BelongsTo(() => University)
  university: University;

  @ForeignKey(() => Passion)
  @Column
  passionId: number;

  @BelongsTo(() => Passion)
  passion: Passion;

  @HasMany(() => Job)
  jobs: Job[];
}
