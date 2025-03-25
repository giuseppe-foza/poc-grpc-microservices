import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProductService } from '../services/product.service';
import { ProductUpdateDto } from '../dto/product-update.dto';
import { ProductCreateDto } from '../dto/product-create.dto';
import { ProductSearchParamsDto } from '../dto/product-search-params.dto';

@Controller()
export class GrpcProductController {
  constructor(private readonly productService: ProductService) {}

  @GrpcMethod('ProductService', 'FindAllProducts')
  findAllProducts(data: ProductSearchParamsDto) {
    const products = this.productService.findAll(data);
    return { data: products };
  }

  @GrpcMethod('ProductService', 'FindOneProduct')
  findOneProduct(data: { id: string }) {
    const product = this.productService.findOne(data.id);
    return { data: product };
  }

  @GrpcMethod('ProductService', 'CreateProduct')
  createProduct(data: ProductCreateDto) {
    const createdProduct = this.productService.create(data);
    return { data: createdProduct };
  }

  @GrpcMethod('ProductService', 'UpdateProduct')
  updateProduct(data: ProductUpdateDto & { id: string }) {
    const updatedProduct = this.productService.update(data.id, data);
    return { data: updatedProduct };
  }

  @GrpcMethod('ProductService', 'DeleteProduct')
  deleteProduct(data: { id: string }) {
    this.productService.delete(data.id);
    return { success: true };
  }
}
