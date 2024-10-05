import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TStatusTask } from './task.model';
import { UUID } from 'crypto';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

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
