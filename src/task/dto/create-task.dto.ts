import { TaskModel } from '../task.model';

export class CreateTaskDto {
  description: string;
  title: string;
  date: Date;
}
