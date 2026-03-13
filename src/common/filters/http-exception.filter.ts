import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
    }

    this.logger.error(`HTTP Error ${status}: ${message}`);

    response.status(status).json({
      success: false,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message: message,
    });
  }

  logException(exception: any) {
    this.logger.error(`Exception occurred: ${exception}`);
  }

  logRequest(request: any) {
    this.logger.warn(`Request URL: ${request.url}`);
  }

  buildErrorResponse(status: number, message: string) {
    return {
      status,
      message,
      timestamp: new Date(),
    };
  }
}