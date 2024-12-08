import {
  // IsDate,
  IsEmail,
  // IsInt,
  IsNotEmpty,
  // Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @MinLength(6)
  password: string;
  @IsNotEmpty()
  name: string;
  age: number;
  phone: number;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}
