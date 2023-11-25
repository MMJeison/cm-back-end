import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsUUID, Max, Min } from "class-validator";

export class CreateRestaurantRatingDto {

  @IsNumber()
  @Min(0)
  @Max(5)
  puntuation: number;

  @Transform(({ value }) => value.toLowerCase())
  @IsNotEmpty()
  comment: string;

  @IsOptional()
  @IsEmail()
  userEmail: string;

  @IsOptional()
  @IsUUID()
  userId: string;

  @IsUUID()
  restaurantId: string;

}
