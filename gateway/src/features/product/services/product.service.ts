export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

/*
  FindAllProducts
*/
export interface IFindAllProductsRequest {
  name?: string;
}

export interface IFindAllProductsResponse {
  data: IProduct[];
}

/*
  FindOneProduct
*/
export interface IFindOneProductRequest {
  id: string;
}

export interface IFindOneProductResponse {
  data: IProduct;
}

/*
  CreateProduct
*/
export interface ICreateProductRequest {
  name: string;
  price: number;
  quantity: number;
}

export interface ICreateProductResponse {
  data: IProduct;
}

/*
  UpdateProduct
*/
export interface IUpdateProductRequest {
  id: string;
  name: string;
  price: number;
}

export interface IUpdateProductResponse {
  data: IProduct;
}

/*
  DeleteProduct
*/
export interface IDeleteProductRequest {
  id: string;
}

export interface IDeleteProductResponse {
  success: boolean;
}

/*
  ProductService methods
*/
export interface IProductService {
  FindAllProducts(
    request: IFindAllProductsRequest,
  ): Promise<IFindAllProductsResponse> | IFindAllProductsResponse;

  FindOneProduct(
    request: IFindOneProductRequest,
  ): Promise<IFindOneProductResponse> | IFindOneProductResponse;

  CreateProduct(
    request: ICreateProductRequest,
  ): Promise<ICreateProductResponse> | ICreateProductResponse;

  UpdateProduct(
    request: IUpdateProductRequest,
  ): Promise<IUpdateProductResponse> | IUpdateProductResponse;

  DeleteProduct(
    request: IDeleteProductRequest,
  ): Promise<IDeleteProductResponse> | IDeleteProductResponse;
}
