import { UUID } from 'crypto';

export type TStatusTask = 'open' | 'in_progress' | 'done';

export class TaskModel {
  id: UUID;
  title: string;
  description: string;
  status: TStatusTask;
  date: Date;
}
