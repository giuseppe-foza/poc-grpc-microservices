import { IsOptional, IsString } from 'class-validator';

export class ProductSearchParamsDto {
  @IsOptional()
  @IsString()
  name?: string;
}
