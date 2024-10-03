import { ConfigModule } from '@nestjs/config';

/**
 * Config global nextJs from @nestjs/config
 */
export const nestConfig = ConfigModule.forRoot({
  isGlobal: true,
});
