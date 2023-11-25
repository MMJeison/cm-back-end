import { Transform } from "class-transformer";
import { IsDate, IsNotEmpty, IsOptional, IsString } from "class-validator";

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
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  address: string;

  @IsDate()
  date: Date;

}
