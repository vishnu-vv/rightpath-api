import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Course } from 'src/courses/course.entity';

@Table
export class University extends Model {
  @Column
  name: string;

  @Column
  location: string;

  @Column
  imageUrl: string;

  @HasMany(() => Course)
  courses: Course[];
}