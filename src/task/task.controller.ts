import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskModel } from './task.model';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/all')
  async getAllTask(): Promise<TaskModel[]> {
    return await this.taskService.getAllTask();
  }
}
