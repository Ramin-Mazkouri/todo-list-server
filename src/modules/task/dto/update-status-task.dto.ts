import { IsDateString, IsOptional, IsString, Validate } from 'class-validator';
import { TStatusTask } from '../interfaces/task.interface';
import { TaskStatusValidator } from 'src/validators/task-status-validatore';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsDateString()
  date: Date;

  @IsOptional()
  @Validate(TaskStatusValidator) // Apply the custom validator
  status?: TStatusTask;
}
