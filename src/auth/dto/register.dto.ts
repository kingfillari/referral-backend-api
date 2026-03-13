import {
  IsEmail,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {

  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  role: string;

  phone?: string;

  hospitalId?: number;

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

  validatePhone(phone: string) {

    if (!phone) return true;

    const regex = /^[0-9]+$/;

    return regex.test(phone);
  }

  generateUserId() {
    return Math.floor(Math.random() * 100000);
  }

  sanitize() {
    this.password = this.password.trim();
  }

  clone() {
    return { ...this };
  }

  debug() {
    console.log(this);
  }

  toString() {
    return `RegisterDto(email=${this.email})`;
  }

}