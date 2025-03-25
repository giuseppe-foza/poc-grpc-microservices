import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { GrpcExceptionFilter } from '../../../config/filters/grpc.exception.filter';
import {
  ICreateProductRequest,
  ICreateProductResponse,
  IDeleteProductResponse,
  IFindAllProductsResponse,
  IFindOneProductResponse,
  IUpdateProductRequest,
  IUpdateProductResponse,
} from '../services/product.service';
import { ProductGrpcClient } from '../clients/product-grpc.client';

@Controller('products')
@UseFilters(GrpcExceptionFilter)
export class HttpProductController {
  constructor(private readonly productGrpcClient: ProductGrpcClient) {}

  @Get()
  async findAll(): Promise<IFindAllProductsResponse> {
    return this.productGrpcClient.service.FindAllProducts({});
  }

  @Get(':id')
  async findById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<IFindOneProductResponse> {
    return this.productGrpcClient.service.FindOneProduct({ id });
  }

  @Post()
  async create(
    @Body() createProductDto: ICreateProductRequest,
  ): Promise<ICreateProductResponse> {
    return this.productGrpcClient.service.CreateProduct(createProductDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateProductDto: Omit<IUpdateProductRequest, 'id'>,
  ): Promise<IUpdateProductResponse> {
    return this.productGrpcClient.service.UpdateProduct({
      id,
      ...updateProductDto,
    });
  }

  @Delete(':id')
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<IDeleteProductResponse> {
    return this.productGrpcClient.service.DeleteProduct({ id });
  }
}
