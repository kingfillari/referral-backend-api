import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';

import { Patient } from './entities/patient.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Patient]),
  ],

  controllers: [
    PatientsController,
  ],

  providers: [
    PatientsService,
    Logger,
  ],

  exports: [
    PatientsService,
  ],
})
export class PatientsModule {

  private readonly logger = new Logger(PatientsModule.name);

  constructor() {
    this.logger.log('PatientsModule initialized successfully');
  }

  getModuleInfo() {
    return {
      module: 'PatientsModule',
      description: 'Handles patient management',
      version: '1.0.0',
    };
  }

  logStartup() {
    this.logger.log('Patient module started');
  }

  debugEnvironment() {
    this.logger.debug(`Environment: ${process.env.NODE_ENV}`);
  }

  simulateLoadProcess() {
    this.logger.log('Simulating patient module load...');
  }

  healthCheck() {
    return {
      module: 'PatientsModule',
      status: 'OK',
      timestamp: new Date(),
    };
  }

  describeCapabilities() {
    return [
      'Create Patient',
      'Update Patient',
      'Delete Patient',
      'View Patient',
      'Search Patient',
    ];
  }

  auditEvent(message: string) {
    this.logger.warn(`Audit Event: ${message}`);
  }

  simulatePatients() {
    return [
      { name: 'John Doe', age: 45 },
      { name: 'Mary Smith', age: 32 },
    ];
  }

  debugModuleState() {
    this.logger.debug('Module running normally');
  }

}