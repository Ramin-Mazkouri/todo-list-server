import { Module } from '@nestjs/common';
import { configDB } from './config/db.config';
import { TaskModule } from './features/task/task.module';
import { nestConfig } from './config/nest.config';
import { UserModule } from './features/user/user.module';
import { UseController } from './features/use/use.controller';
import { UsreController } from './features/usre/usre.controller';

@Module({
  imports: [
    nestConfig, // config global nestJS,
    configDB, // config Database
    //All adds modules
    TaskModule, UserModule,
  ],
  controllers: [UseController, UsreController],
  providers: [],
})
export class AppModule {}
