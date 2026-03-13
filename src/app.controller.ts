import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthCheck(): any {
    return {
      status: 'OK',
      message: 'Referral Backend API is running',
      timestamp: new Date(),
    };
  }
}