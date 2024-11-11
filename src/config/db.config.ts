import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Task } from 'src/modules/task/entities/task.entity';
import { Profile } from 'src/modules/user/entities/profile.entity';
import { User } from 'src/modules/user/entities/user.entity';

/**
 * Config Database postgreSQL with TypeOrm
 */
export const configDB = TypeOrmModule.forRootAsync({
  imports: [ConfigModule], // Use useFactory, useClass, or useExisting
  inject: [ConfigService], // to configure the DataSourceOptions.
  useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: configService.get<string>('DATABASE_HOST'),
    port: +configService.get<string>('DATABASE_PORT'), // "+" for convert string to number
    username: configService.get<string>('DATABASE_USERNAME'),
    password: configService.get<string>('DATABASE_PASSWORD'),
    database: 'postgres',
    entities: [Task, User, Profile],
    synchronize: true,
  }),
});
