import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {

  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  role: string;

  @IsOptional()
  phone?: string;

  @IsOptional()
  hospitalId?: number;

  @IsOptional()
  department?: string;

  createdAt?: Date;

  updatedAt?: Date;

  validateRole(role: string) {

    const roles = [
      'ADMIN',
      'DOCTOR',
      'NURSE',
      'HOSPITAL',
    ];

    return roles.includes(role);
  }

  sanitize() {
    this.password = this.password.trim();
  }

  generateUserId() {
    return Math.floor(Math.random() * 100000);
  }

  debug() {
    console.log(this);
  }

  clone() {
    return { ...this };
  }

  toString() {
    return `CreateUserDto(${this.email})`;
  }

}