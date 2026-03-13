import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger(RolesGuard.name);

  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    if (!requiredRoles) {
      this.logger.debug('No roles required for this endpoint');
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      this.logger.warn('User not found in request');
      throw new ForbiddenException('Access denied');
    }

    this.logger.log(`User role: ${user.role}`);

    const hasRole = requiredRoles.some((role) => user.role === role);

    if (!hasRole) {
      this.logger.warn(
        `User ${user.email} does not have required role: ${requiredRoles}`,
      );
      throw new ForbiddenException('You do not have permission');
    }

    this.logger.log('Role authorization successful');

    return true;
  }

  logRoles(requiredRoles: string[]) {
    this.logger.debug(`Required roles: ${requiredRoles.join(', ')}`);
  }

  validateRole(role: string): boolean {
    const validRoles = ['ADMIN', 'DOCTOR', 'NURSE', 'HOSPITAL'];

    return validRoles.includes(role);
  }

  simulateSecurityAudit(user: any) {
    this.logger.log(
      `Security Audit: ${user.email} accessed protected resource at ${new Date()}`,
    );
  }

  debugRequest(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    this.logger.debug(`Method: ${request.method}`);
    this.logger.debug(`URL: ${request.url}`);
  }
}