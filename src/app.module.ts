import { Module } from '@nestjs/common';
import { configDB } from './config/db.config';
import { TaskModule } from './features/task/task.module';
import { nestConfig } from './config/nest.config';

@Module({
  imports: [
    nestConfig, // config global nestJS,
    configDB, // config Database
    //All adds modules
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
