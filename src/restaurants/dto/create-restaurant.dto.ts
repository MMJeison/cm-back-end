import { Transform } from 'class-transformer'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRestaurantDto {

  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  name: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  department: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  city: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  address: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  image: string;

}
