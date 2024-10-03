export class TaskModel {
  id: number;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'done';
}
