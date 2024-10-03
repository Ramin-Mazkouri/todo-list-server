import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TaskEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: 'open' | 'in_progress' | 'done';
}
