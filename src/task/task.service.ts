import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private tasksRepository: Repository<TaskEntity>,
  ) {}

  getAllTask(): Promise<TaskEntity[]> {
    return this.tasksRepository.find();
  }
}
