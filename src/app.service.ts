import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to the Referral Management Backend API!';
  }

  healthStatus(): any {
    return {
      status: 'OK',
      uptime: process.uptime(),
      timestamp: new Date(),
      version: '1.0.0',
    };
  }
}