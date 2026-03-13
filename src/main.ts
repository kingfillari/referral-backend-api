import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { ValidationPipe } from '@nestjs/common';
import * as helmet from 'helmet';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Security middlewares
  app.use(helmet()); // Adds HTTP headers for security
  app.use(cors({ origin: '*' })); // Allow all origins for now, can restrict in production

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip properties not in DTOs
      forbidNonWhitelisted: true, // Throw error if extra properties found
      transform: true, // Transform payloads to DTO instances
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // Global filters and interceptors
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());

  // Custom logging
  console.log('----------------------------------------');
  console.log('🚀 Starting Referral Management Backend API');
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Port: ${process.env.PORT || 3000}`);
  console.log('----------------------------------------');

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`✅ Referral Backend API running at http://localhost:${port}`);
}

bootstrap();