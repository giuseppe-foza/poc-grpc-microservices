import { GrpcProductController } from '../controllers/grpc.product.controller';
import { ProductService } from '../services/product.service';
import { Module } from '@nestjs/common';
import { ProductRepository } from '../repositories/product.repository';

@Module({
  controllers: [GrpcProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
