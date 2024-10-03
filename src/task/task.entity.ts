import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TStatusTask } from './task.model';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TStatusTask;
}
