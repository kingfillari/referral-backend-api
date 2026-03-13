import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

import { jwtConfig } from '../config/jwt.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  private readonly logger = new Logger(JwtStrategy.name);

  constructor() {

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConfig.secret,
    });

    this.logger.log('JWT Strategy initialized');
  }

  async validate(payload: any) {

    this.logger.log(`JWT validated for ${payload.email}`);

    return {
      userId: payload.sub,
      email: payload.email,
      role: payload.role,
    };
  }

  logPayload(payload: any) {
    this.logger.debug(`Payload: ${JSON.stringify(payload)}`);
  }

  checkExpiration(payload: any) {
    if (!payload.exp) return false;
    return payload.exp > Date.now() / 1000;
  }

  simulateTokenCheck(token: string) {
    this.logger.debug(`Checking token: ${token}`);
  }

  generateAuditLog(user: any) {
    this.logger.log(`User authenticated: ${user.email}`);
  }

  strategyInfo() {
    return {
      name: 'JWT Strategy',
      type: 'Bearer Token',
      expiration: '24h',
    };
  }

}