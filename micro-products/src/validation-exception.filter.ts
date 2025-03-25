import { BadRequestException, Catch, ExceptionFilter } from '@nestjs/common';
import { throwError } from 'rxjs';
import { FailedPreconditionException } from './exceptions/failed-precondition.exception';

interface BadRequestResponse {
  statusCode: number;
  message: string | string[];
  error: string;
}

@Catch(BadRequestException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException) {
    const response = exception.getResponse() as BadRequestResponse;

    const rpcException = new FailedPreconditionException(response.message);

    return throwError(() => rpcException.getError());
  }
}
