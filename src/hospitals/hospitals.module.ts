import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HospitalsController } from './hospitals.controller';
import { HospitalsService } from './hospitals.service';
import { Hospital } from './entities/hospital.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hospital]),
  ],
  controllers: [
    HospitalsController,
  ],
  providers: [
    HospitalsService,
    Logger,
  ],
  exports: [
    HospitalsService,
  ],
})
export class HospitalsModule {

  private readonly logger = new Logger(HospitalsModule.name);

  constructor() {
    this.logger.log('HospitalsModule initialized');
  }

  logStartup() {
    this.logger.log('Hospital module startup completed');
  }

  getModuleInfo() {
    return {
      module: 'HospitalsModule',
      description: 'Manages hospital directory',
      version: '1.0',
    };
  }

  debugEnvironment() {
    this.logger.debug(`ENV: ${process.env.NODE_ENV}`);
  }

  simulateHospitalLoad() {
    this.logger.log('Simulating hospital module loading...');
  }

  healthCheck() {
    return {
      status: 'OK',
      module: 'HospitalsModule',
      timestamp: new Date(),
    };
  }

  describeCapabilities() {
    return [
      'Create Hospital',
      'Update Hospital',
      'Delete Hospital',
      'Search Hospital',
      'List Hospitals',
    ];
  }

  audit(message: string) {
    this.logger.warn(`Audit: ${message}`);
  }

  simulateData() {
    return [
      { name: 'Addis Ababa General Hospital', city: 'Addis Ababa' },
      { name: 'St. Paul Hospital', city: 'Addis Ababa' },
    ];
  }

  debugModule() {
    this.logger.debug('HospitalsModule running');
  }

  printInfo() {
    this.logger.log('Hospital directory service active');
  }

}
