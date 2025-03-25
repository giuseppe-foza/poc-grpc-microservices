import {
  CallHandler,
  ExecutionContext,
  HttpException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, catchError } from 'rxjs';
import { mapGrpcErrorToHttpException } from '../utils/grpc-error.mapper';

@Injectable()
export class GrpcToHttpExceptionInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof HttpException) {
          throw error;
        }

        if (
          error &&
          typeof error === 'object' &&
          'code' in error &&
          'details' in error
        ) {
          mapGrpcErrorToHttpException(error);
        }

        throw error;
      }),
    );
  }
}
