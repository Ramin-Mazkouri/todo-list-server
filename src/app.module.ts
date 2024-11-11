import { Module } from '@nestjs/common';
import { configDB } from './config/db.config';
import { TaskModule } from './modules/task/task.module';
import { nestConfig } from './config/nest.config';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    nestConfig, // config global nestJS,
    configDB, // config Database
    //All adds modules
    TaskModule,
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
