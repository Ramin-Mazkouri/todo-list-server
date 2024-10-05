import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskModel } from './task.model';
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
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TaskModel> {
    return await this.taskService.getTaskWithID(id);
  }

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskModel> {
    return await this.taskService.createTask(createTaskDto);
  }

  @Patch(':id/status')
  async updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<TaskModel> {
    return await this.taskService.updateTask({
      id,
      ...updateTaskDto,
    });
  }

  @Delete(':id')
  async deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.taskService.deleteTask(id);
  }
}
