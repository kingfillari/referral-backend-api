import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.log('Returning welcome message');
    return 'Welcome to the Referral Management Backend API!';
  }

  healthStatus(): any {
    const uptime = process.uptime();
    this.logger.log(`Health check requested, uptime: ${uptime} seconds`);
    return {
      status: 'OK',
      uptime: uptime,
      memoryUsage: process.memoryUsage(),
      environment: process.env.NODE_ENV || 'development',
      version: '1.0.0',
      timestamp: new Date(),
    };
  }
}