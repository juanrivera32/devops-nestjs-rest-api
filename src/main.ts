import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CustomExceptionFilter } from './exception-filters/custom.exception-filter';
import { ConfigService } from './services/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = new ConfigService()
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new CustomExceptionFilter());
  app.enableCors({
    origin: ['http://localhost:4200', 'http://angular-shop.com', 'https://angular-shop.com', 'http://192.168.1.1', '*'],
  });
  await app.listen(configService.getAppConfig().port);
}
bootstrap();
