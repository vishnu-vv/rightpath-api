import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class University extends Model {
  @Column
  name: string;

  @Column
  location: string;

  @Column
  imageUrl: string;
}