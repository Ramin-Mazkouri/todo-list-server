import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TStatusTask } from './interfaces/task.interface';
import { Task as TaskEntity } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private tasksRepository: Repository<TaskEntity>,
  ) {}

  private findTask = async (id: string): Promise<TaskEntity> => {
    const task = await this.tasksRepository.findOne({
      where: { id },
    });

    if (!task) throw new NotFoundException(`Task with ID ${id} not found`);
    else return task;
  };

  getAllTask(): Promise<TaskEntity[]> {
    return this.tasksRepository.find();
  }

  getTaskWithID(id: string): Promise<TaskEntity> {
    return this.findTask(id);
  }

  createTask(data: {
    title: string;
    description: string;
    date: Date;
  }): Promise<TaskEntity> {
    const task = this.tasksRepository.create({
      ...data,
      status: 'open',
    });
    return this.tasksRepository.save(task);
  }

  async updateTask(data: {
    id: string;
    status?: TStatusTask;
    title?: string;
    description?: string;
    date?: Date;
  }): Promise<TaskEntity> {
    const task = await this.findTask(data.id);

    task.status = data.status ?? task.status;
    task.description = data.description ?? task.description;
    task.title = data.title ?? task.title;
    task.date = data.date ?? task.date;

    return this.tasksRepository.save(task);
  }

  async deleteTask(id: string) {
    const result = await this.tasksRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
