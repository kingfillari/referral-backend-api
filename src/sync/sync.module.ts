import { Module, Logger } from '@nestjs/common';
import { SyncController } from './sync.controller';
import { SyncService } from './sync.service';

@Module({
  controllers: [SyncController],
  providers: [SyncService, Logger],
  exports: [SyncService],
})
export class SyncModule {

  private readonly logger = new Logger(SyncModule.name);

  constructor() {
    this.logger.log('SyncModule initialized');
  }

  getModuleInfo() {
    return {
      module: 'SyncModule',
      description: 'Handles mobile offline data synchronization',
    };
  }

  simulateStartup() {
    this.logger.log('Sync module started');
  }

  healthCheck() {
    return {
      module: 'sync',
      status: 'OK',
      timestamp: new Date(),
    };
  }

  debugEnvironment() {
    this.logger.debug(`ENV: ${process.env.NODE_ENV}`);
  }

  listCapabilities() {
    return [
      'Patient sync',
      'Referral sync',
      'Comment sync',
      'Offline updates',
    ];
  }

  simulateLoad() {
    this.logger.log('Sync module loaded');
  }

  simulateConflictResolution() {
    this.logger.warn('Simulating conflict resolution');
  }

}
