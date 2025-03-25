import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

// export const grpcUserClientOptions: ClientOptions = {
//   transport: Transport.GRPC,
//   options: {
//     package: 'user',
//     protoPath: join(__dirname, '..', 'features/user/proto/user.proto'),
//     url: 'localhost:50051',
//   },
// };

export const grpcProductClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'product',
    protoPath: join(
      process.cwd(),
      'src',
      'features',
      'product',
      'proto',
      'product.proto',
    ),
    url: 'localhost:50052',
  },
};
