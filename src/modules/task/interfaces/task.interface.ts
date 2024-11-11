export type TStatusTask = 'open' | 'in_progress' | 'done';

export interface TaskModel {
  id: string;
  title: string;
  description: string;
  status: TStatusTask;
  date: Date;
}
