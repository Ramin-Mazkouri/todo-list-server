import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskModel } from './interfaces/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-status-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/all')
  async getAllTask(): Promise<TaskModel[]> {
    return await this.taskService.getAllTask();
  }

  @Get(':id')
  async getTaskWithId(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<TaskModel> {
    return await this.taskService.getTaskWithID(id);
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskModel> {
    return await this.taskService.createTask(createTaskDto);
  }

  @Patch(':id/status')
  async updateTask(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<TaskModel> {
    return await this.taskService.updateTask({
      id,
      ...updateTaskDto,
    });
  }

  @Delete(':id')
  async deleteTask(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return await this.taskService.deleteTask(id);
  }
}
