import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Response } from 'express';

function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === 'object' &&
    error !== null &&
    Reflect.has(error, 'message') &&
    typeof Reflect.get(error, 'message') === 'string'
  );
}

@Catch(RpcException)
export class GrpcExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const error = exception.getError();

    const message =
      typeof error === 'string'
        ? error
        : isErrorWithMessage(error)
          ? Reflect.get(error, 'message')
          : 'Unexpected gRPC error';

    response.status(400).json({
      statusCode: 400,
      message,
      error: 'Bad Request (gRPC)',
    });
  }
}
