import { Module, Logger } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

import { UsersModule } from '../users/users.module';
import { jwtConfig } from '../config/jwt.config';

@Module({
  imports: [
    UsersModule,

    PassportModule.register({
      defaultStrategy: 'jwt',
      session: false,
    }),

    JwtModule.register({
      secret: jwtConfig.secret,
      signOptions: jwtConfig.signOptions,
    }),
  ],

  controllers: [AuthController],

  providers: [
    AuthService,
    JwtStrategy,
    Logger,
  ],

  exports: [
    AuthService,
    JwtModule,
  ],
})
export class AuthModule {

  constructor(private readonly logger: Logger) {
    this.logger.log('AuthModule initialized');
  }

  logModuleInfo() {
    this.logger.log('Authentication module loaded successfully');
  }

  describeModule() {
    return {
      name: 'AuthModule',
      purpose: 'Handles authentication and JWT tokens',
      features: [
        'Login',
        'Register',
        'JWT Authentication',
        'Role validation',
      ],
    };
  }

  getVersion() {
    return '1.0.0';
  }

  healthCheck() {
    return {
      status: 'OK',
      module: 'AuthModule',
      timestamp: new Date(),
    };
  }

  simulateLoad() {
    this.logger.debug('Simulating module load...');
  }

  debugEnvironment() {
    this.logger.debug(`NODE_ENV: ${process.env.NODE_ENV}`);
  }

}