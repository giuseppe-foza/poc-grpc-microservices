import { ProductSearchParamsDto } from '../dto/product-search-params.dto';
import { ProductCreateDto } from '../dto/product-create.dto';
import { ProductUpdateDto } from '../dto/product-update.dto';
import { Product } from '../models/product';
import { randomUUID as v4 } from 'node:crypto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  private readonly products: Product[] = [];

  constructor() {
    this.products = [
      ...this.products,
      {
        id: '7c95c2ba-3946-4d57-a311-2b4a4ba38105',
        name: 'Test',
        price: 19.9,
      },
    ];
  }

  findAll(productSearchParamsDto: ProductSearchParamsDto): Product[] {
    return this.products.filter((product) => {
      return productSearchParamsDto.name
        ? product.name
            .toLowerCase()
            .includes(productSearchParamsDto.name.toLowerCase())
        : true;
    });
  }

  findOne(id: string): Product | null {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      return null;
    }
    return product;
  }

  create(productCreateDto: ProductCreateDto): Product {
    const newProduct: Product = {
      id: v4(),
      ...productCreateDto,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: string, productUpdateDto: ProductUpdateDto): Product {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      throw new Error('Product not found');
    }

    const updatedProduct = {
      ...this.products[productIndex],
      ...productUpdateDto,
    };

    this.products[productIndex] = updatedProduct;
    return updatedProduct;
  }

  delete(id: string): void {
    const productIndex = this.products.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(productIndex, 1);
  }
}
