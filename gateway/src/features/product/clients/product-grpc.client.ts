import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcProductClientOptions } from '../../../config/grpc/grpc';
import { IProductService } from '../services/product.service';

@Injectable()
export class ProductGrpcClient implements OnModuleInit {
  @Client(grpcProductClientOptions)
  private readonly client: ClientGrpc;

  private productService: IProductService;

  onModuleInit() {
    this.productService =
      this.client.getService<IProductService>('ProductService');
  }

  get service(): IProductService {
    return this.productService;
  }
}
