import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';

export class FailedPreconditionException extends RpcException {
  constructor(message: string | string[]) {
    super({
      message,
      code: status.FAILED_PRECONDITION,
    });
  }
}
