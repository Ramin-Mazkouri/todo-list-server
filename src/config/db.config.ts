import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TaskEntity } from 'src/task/task.entity';

const { DATABASE_HOST, DATABASE_PORT, DATABASE_USERNAME, DATABASE_PASSWORD } =
  process.env;

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
    entities: [TaskEntity],
    synchronize: true,
  }),
});
