// import { Injectable, OnModuleInit } from '@nestjs/common';
// import { Client, ClientGrpc } from '@nestjs/microservices';
// import { grpcUserClientOptions } from '../../../config/grpc';
//
// interface UserGrpcService {
//   FindUser(data: {
//     email: string;
//   }): Promise<{ id: number; name: string; email: string }>;
// }
//
// @Injectable()
// export class UserService implements OnModuleInit {
//   @Client(grpcUserClientOptions)
//   private readonly client: ClientGrpc;
//   private userService: UserGrpcService;
//
//   onModuleInit() {
//     this.userService = this.client.getService<UserGrpcService>('UserService');
//   }
//
//   get service() {
//     return this.userService;
//   }
// }
