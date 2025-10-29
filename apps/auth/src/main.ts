import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true })); // whitelist: true, strips away the properties which don't exist in the model
  app.useLogger(app.get(Logger));
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
