import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { PassionCategory } from 'src/passion-categories/passion-category.entity';

@Table
export class Passion extends Model {
  @Column
  title: string;

  @ForeignKey(() => PassionCategory)
  @Column
  passionCategoryId: number

  @BelongsTo(() => PassionCategory)
  passionCategory: PassionCategory
}