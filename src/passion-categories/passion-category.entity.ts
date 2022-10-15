import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Passion } from 'src/passions/passion.entity';

@Table
export class PassionCategory extends Model {
  @Column
  title: string;

  @HasMany(() => Passion)
  passions: Passion[];
}
