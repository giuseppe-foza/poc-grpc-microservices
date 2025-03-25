import { Injectable } from '@nestjs/common';
import { Product } from '../models/product';
import { ProductSearchParamsDto } from '../dto/product-search-params.dto';
import { ProductCreateDto } from '../dto/product-create.dto';
import { ProductUpdateDto } from '../dto/product-update.dto';
import { ProductRepository } from '../repositories/product.repository';
import { NotFoundException } from '../exceptions/not-found.exception';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  findAll(productSearchParamsDto: ProductSearchParamsDto): Product[] {
    return this.productRepository.findAll(productSearchParamsDto);
  }

  findOne(id: string): Product {
    const product = this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  create(productCreateDto: ProductCreateDto): Product {
    return this.productRepository.create(productCreateDto);
  }

  update(id: string, productUpdateDto: ProductUpdateDto): Product {
    const product = this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return this.productRepository.update(id, productUpdateDto);
  }

  delete(id: string): void {
    const product = this.productRepository.findOne(id);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return this.productRepository.delete(id);
  }
}
