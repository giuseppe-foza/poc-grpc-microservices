import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';

export class NotFoundException extends RpcException {
  constructor(message: string | string[]) {
    super({
      message,
      code: status.NOT_FOUND,
    });
  }
}