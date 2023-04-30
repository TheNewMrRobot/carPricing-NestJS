import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // any additional parameters sending for the client will automatically stripped off other than DTO
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
