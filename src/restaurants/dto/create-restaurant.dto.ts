import { Transform } from 'class-transformer'
import { IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

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

  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  image: string;

}
