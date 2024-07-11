import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { error } from 'console';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe)
    await app.listen(3000);
    console.log("Api iniciada!")
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
