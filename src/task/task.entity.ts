import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
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

  @Column('date')
  date: Date;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}
