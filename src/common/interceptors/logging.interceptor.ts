import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;

    const now = Date.now();

    this.logger.log(`Incoming Request: ${method} ${url}`);

    return next.handle().pipe(
      tap(() => {
        const responseTime = Date.now() - now;

        this.logger.log(
          `Response: ${method} ${url} - ${responseTime}ms`,
        );
      }),
    );
  }

  logHeaders(request: any) {
    this.logger.debug(`Headers: ${JSON.stringify(request.headers)}`);
  }

  logBody(request: any) {
    this.logger.debug(`Body: ${JSON.stringify(request.body)}`);
  }

  simulatePerformanceMetric(time: number) {
    if (time > 1000) {
      this.logger.warn('Slow API detected');
    }
  }
}