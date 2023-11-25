import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class CreateEventDto {

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
  place: string;

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
  @IsOptional()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  image: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  address: string;

  @IsDate()
  date: Date;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;

}
