import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { TStatusTask } from 'src/task/task.model';

@ValidatorConstraint({ name: 'TaskStatus', async: true })
export class TaskStatusValidator implements ValidatorConstraintInterface {
  private readonly allowedStatuses: TStatusTask[] = [
    'done',
    'in_progress',
    'done',
  ];

  validate(status: any, arg: ValidationArguments) {
    return this.allowedStatuses.includes(status);
  }

  defaultMessage(args: ValidationArguments) {
    return `Status must be one of the following: ${this.allowedStatuses.join(', ')}`;
  }
}
