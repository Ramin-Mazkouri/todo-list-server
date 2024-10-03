import { TStatusTask } from '../task.model';

export class UpdateTaskDto {
  status?: TStatusTask;
  title?: string;
  description?: string;
}
