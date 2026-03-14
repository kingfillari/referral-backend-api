import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet'; // updated import

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Security middlewares
  app.use(helmet()); // now works
  app.enableCors({ origin: '*' }); // fixed cors

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  // Global filters and interceptors
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());

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