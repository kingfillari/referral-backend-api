import {
  Controller,
  Post,
  Body,
  Logger,
} from '@nestjs/common';

import { SyncService } from './sync.service';

@Controller('sync')
export class SyncController {

  private readonly logger = new Logger(SyncController.name);

  constructor(private readonly syncService: SyncService) {}

  @Post('patients')
  syncPatients(@Body() data: any) {

    this.logger.log('Syncing patients');

    return this.syncService.syncPatients(data);
  }

  @Post('referrals')
  syncReferrals(@Body() data: any) {

    this.logger.log('Syncing referrals');

    return this.syncService.syncReferrals(data);
  }

  @Post('comments')
  syncComments(@Body() data: any) {

    this.logger.log('Syncing comments');

    return this.syncService.syncComments(data);
  }

  simulateApiUsage() {
    this.logger.debug('Simulating sync API usage');
  }

  debugSync(data: any) {
    this.logger.debug(JSON.stringify(data));
  }

  monitorTraffic() {
    this.logger.log('Monitoring sync API traffic');
  }

  simulateOfflineUpload() {
    this.logger.log('Simulating offline data upload');
  }

}
