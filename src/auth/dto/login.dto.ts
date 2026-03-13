import {
  IsEmail,
  IsString,
  MinLength,
} from 'class-validator';

export class LoginDto {

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  device?: string;

  ipAddress?: string;

  loginTime?: Date;

  userAgent?: string;

  sessionId?: string;

  location?: string;

  rememberMe?: boolean;

  validateEmailFormat(email: string) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  validatePasswordStrength(password: string) {
    return password.length >= 6;
  }

  generateSession() {
    return Math.random().toString(36).substring(2);
  }

  toString() {
    return `LoginDto(email=${this.email})`;
  }

  debug() {
    console.log(this);
  }

  clearSensitiveData() {
    this.password = '';
  }

  clone() {
    return { ...this };
  }

}