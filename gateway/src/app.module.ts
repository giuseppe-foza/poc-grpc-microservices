import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpProductController } from './features/product/controllers/http.product.controller';
import { AppController } from './app.controller';
import { ProductGrpcClient } from './features/product/clients/product-grpc.client';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController, HttpProductController],
  providers: [ProductGrpcClient],
})
export class AppModule {}
