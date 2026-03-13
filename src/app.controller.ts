import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRoot(): any {
    return {
      message: this.appService.getHello(),
      status: 'OK',
      timestamp: new Date(),
    };
  }

  @Get('health')
  healthCheck(): any {
    return this.appService.healthStatus();
  }
}