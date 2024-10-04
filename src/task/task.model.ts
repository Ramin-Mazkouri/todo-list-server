export type TStatusTask = 'open' | 'in_progress' | 'done';

export class TaskModel {
  id: number;
  title: string;
  description: string;
  status: TStatusTask;
  date: Date;
}
