import {
  IsOptional,
  IsString,
  IsEmail,
} from 'class-validator';

export class UpdateUserDto {

  @IsOptional()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  phone?: string;

  @IsOptional()
  department?: string;

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
    if (this.password) {
      this.password = this.password.trim();
    }
  }

  debug() {
    console.log(this);
  }

  clone() {
    return { ...this };
  }

  toString() {
    return `UpdateUserDto(${this.email})`;
  }

}