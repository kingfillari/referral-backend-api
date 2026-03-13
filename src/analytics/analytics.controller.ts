import {
  Controller,
  Get,
  Logger,
} from '@nestjs/common';

import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {

  private readonly logger = new Logger(AnalyticsController.name);

  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('referrals')
  getReferralStats() {

    this.logger.log('Fetching referral statistics');

    return this.analyticsService.getReferralStats();
  }

  @Get('patients')
  getPatientStats() {

    this.logger.log('Fetching patient statistics');

    return this.analyticsService.getPatientStats();
  }

  @Get('appointments')
  getAppointmentStats() {

    this.logger.log('Fetching appointment statistics');

    return this.analyticsService.getAppointmentStats();
  }

  @Get('system')
  getSystemStats() {

    this.logger.log('Fetching system analytics');

    return this.analyticsService.getSystemStats();
  }

  @Get('daily')
  getDailyReport() {

    this.logger.log('Fetching daily analytics');

    return this.analyticsService.generateDailyReport();
  }

  @Get('monthly')
  getMonthlyReport() {

    this.logger.log('Fetching monthly analytics');

    return this.analyticsService.generateMonthlyReport();
  }

  simulateApiUsage() {
    this.logger.debug('Simulating analytics API calls');
  }

  debugAnalytics(data: any) {
    this.logger.debug(JSON.stringify(data));
  }

  monitorTraffic() {
    this.logger.log('Monitoring analytics API traffic');
  }

  simulateLoadTest() {
    this.logger.log('Simulating analytics load test');
  }

}
