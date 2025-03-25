import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  GatewayTimeoutException,
  InternalServerErrorException,
  NotFoundException,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { status } from '@grpc/grpc-js';

export interface GrpcError {
  code: status;
  details?: string;
  message?: string;
  metadata?: any;
}

export function mapGrpcErrorToHttpException(grpcError: GrpcError): never {
  const message =
    grpcError.details ||
    grpcError.message ||
    'Unexpected error from gRPC service';

  switch (grpcError.code) {
    case status.INVALID_ARGUMENT:
      throw new BadRequestException(message);
    case status.FAILED_PRECONDITION:
      throw new BadRequestException(message);
    case status.NOT_FOUND:
      throw new NotFoundException(message);
    case status.ALREADY_EXISTS:
      throw new ConflictException(message);
    case status.PERMISSION_DENIED:
      throw new ForbiddenException(message);
    case status.UNAUTHENTICATED:
      throw new UnauthorizedException(message);
    case status.UNAVAILABLE:
      throw new ServiceUnavailableException(message);
    case status.DEADLINE_EXCEEDED:
      throw new GatewayTimeoutException(message);
    case status.INTERNAL:
    case status.UNKNOWN:
    default:
      throw new InternalServerErrorException(message);
  }
}
