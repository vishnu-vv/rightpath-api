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

@Table
export class Course extends Model {
  @Column
  title: string;

  @Column({ type: DataType.STRING(1000) })
  overview: string;

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
