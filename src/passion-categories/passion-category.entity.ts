import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Passion } from 'src/passion/passion.entity';


@Table
export class PassionCategory extends Model {
  @Column
  title: string;

  @HasMany(() => Passion)
  passions: Passion[];
}