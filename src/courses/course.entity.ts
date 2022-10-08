import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Passion } from 'src/passions/passion.entity';
import { University } from 'src/universities/university.entity';

@Table
export class Course extends Model {
  @Column
  title: string;

  @Column
  overview: string;

  @ForeignKey(() => University)
  @Column
  universityId: number

  @BelongsTo(() => University)
  university: University

  @ForeignKey(() => Passion)
  @Column
  passionId: number

  @BelongsTo(() => Passion)
  passion: Passion
}