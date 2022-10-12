import { BelongsTo, Column, ForeignKey, Model, Table, HasMany } from 'sequelize-typescript';
import { PassionCategory } from 'src/passion-categories/passion-category.entity';
import { Course } from 'src/courses/course.entity';

@Table
export class Passion extends Model {
  @Column
  title: string;

  @ForeignKey(() => PassionCategory)
  @Column
  passionCategoryId: number

  @BelongsTo(() => PassionCategory)
  passionCategory: PassionCategory

  @HasMany(() => Course)
  courses: Course[];
}