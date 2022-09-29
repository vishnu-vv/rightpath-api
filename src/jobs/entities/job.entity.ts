import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Job extends Model {
  @Column
  title: string;

  @Column
  description: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}