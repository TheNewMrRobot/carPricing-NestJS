import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ['asvshubfu'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      // any additional parameters sending for the client will automatically stripped off other than DTO
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
