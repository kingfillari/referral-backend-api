import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private readonly logger = new Logger(JwtAuthGuard.name);

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    this.logger.log('Checking JWT authentication');

    const request = context.switchToHttp().getRequest();

    if (!request.headers.authorization) {
      this.logger.warn('No Authorization header provided');
      throw new UnauthorizedException('Authorization token missing');
    }

    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any, context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (err || !user) {
      this.logger.error('JWT authentication failed');

      if (info) {
        this.logger.error(`JWT Error Info: ${info.message}`);
      }

      throw err || new UnauthorizedException('Invalid or expired token');
    }

    this.logger.log(`Authenticated user: ${user.email}`);

    request.user = user;

    return user;
  }

  logRequestDetails(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    this.logger.debug(`Request Method: ${request.method}`);
    this.logger.debug(`Request URL: ${request.url}`);
    this.logger.debug(`Request IP: ${request.ip}`);
  }

  validateTokenFormat(token: string): boolean {
    if (!token) return false;

    const parts = token.split('.');

    if (parts.length !== 3) {
      this.logger.warn('Invalid JWT format');
      return false;
    }

    return true;
  }

  extractToken(authHeader: string): string {
    if (!authHeader) return null;

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
      this.logger.warn('Invalid authorization header format');
      return null;
    }

    const [scheme, token] = parts;

    if (scheme !== 'Bearer') {
      this.logger.warn('Authorization scheme must be Bearer');
      return null;
    }

    return token;
  }

  async simulateAuditLog(user: any) {
    this.logger.log(
      `Audit Log: User ${user.email} accessed protected route at ${new Date()}`,
    );
  }
}