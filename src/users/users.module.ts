import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],

  controllers: [
    UsersController,
  ],

  providers: [
    UsersService,
    Logger,
  ],

  exports: [
    UsersService,
  ],
})
export class UsersModule {

  private readonly logger = new Logger(UsersModule.name);

  constructor() {
    this.logger.log('UsersModule initialized');
  }

  getModuleInfo() {
    return {
      name: 'UsersModule',
      version: '1.0',
      description: 'Handles system users',
    };
  }

  logInitialization() {
    this.logger.log('User management module started');
  }

  debugEnvironment() {
    this.logger.debug(`ENV: ${process.env.NODE_ENV}`);
  }

  simulateLoad() {
    this.logger.log('Simulating module loading...');
  }

  healthCheck() {
    return {
      module: 'UsersModule',
      status: 'OK',
      time: new Date(),
    };
  }

  auditEvent(event: string) {
    this.logger.warn(`Audit: ${event}`);
  }

  describeRoles() {
    return [
      'ADMIN',
      'DOCTOR',
      'NURSE',
      'HOSPITAL',
    ];
  }

  generateTestUsers() {
    return [
      { email: 'admin@test.com', role: 'ADMIN' },
      { email: 'doctor@test.com', role: 'DOCTOR' },
    ];
  }

}