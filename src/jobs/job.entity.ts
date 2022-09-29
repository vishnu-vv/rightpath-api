import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Job extends Model {
  @Column
  title: string;

  @Column
  description: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  // TODO - Add fields
  // Required skills array
  // Good to have skills array
  // Min and Max salary
  // coverImage
}