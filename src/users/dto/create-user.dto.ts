import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsOptional, Length } from "class-validator";

export class CreateUserDto {

  @IsOptional()
  @Transform(({ value }) => value.toLowerCase())
  @IsNotEmpty()
  name: string;

  @Transform(({ value }) => value.toLowerCase())
  @IsEmail()
  email: string;

  @Transform(({ value }) => value.toLowerCase())
  @Length(6, 32)
  password: string;

}
