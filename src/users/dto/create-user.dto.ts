import { IsEmail, IsString, IsNotEmpty, IsIn } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsIn(['user', 'admin'])
  role: 'user' | 'admin';
}
