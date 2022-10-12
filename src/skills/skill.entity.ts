import { BelongsTo, Column, ForeignKey, Model, Table, HasMany } from 'sequelize-typescript';
import { Job } from 'src/jobs/job.entity';

@Table
export class Skill extends Model {
  @Column
  title: string;

  @ForeignKey(() => Job)
  @Column
  jobId: number

  @BelongsTo(() => Job)
  job: Job
}