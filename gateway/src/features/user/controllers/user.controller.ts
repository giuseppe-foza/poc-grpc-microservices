// import { Controller, Get, Query, UseFilters } from '@nestjs/common';
// import { GrpcExceptionFilter } from '../../../filters/grpc.exception.filter';
// import { UserService } from '../services/user.service';
//
// @Controller('users')
// @UseFilters(GrpcExceptionFilter)
// export class UserController {
//   constructor(private readonly userGrpcClient: UserService) {}
//
//   @Get()
//   async getUser(@Query('email') email: string) {
//     const user = await this.userGrpcClient.service.FindUser({ email });
//     return { data: user };
//   }
// }
