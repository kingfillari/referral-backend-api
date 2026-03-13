import {
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreatePatientDto {

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  age: number;

  @IsString()
  gender: string;

  @IsOptional()
  phone?: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  diagnosis?: string;

  @IsOptional()
  referredBy?: string;

  createdAt?: Date;

  updatedAt?: Date;

  validateGender(gender: string) {

    const genders = ['MALE', 'FEMALE', 'OTHER'];

    return genders.includes(gender.toUpperCase());
  }

  validateAge(age: number) {

    return age > 0 && age < 120;
  }

  sanitize() {

    this.firstName = this.firstName.trim();
    this.lastName = this.lastName.trim();
  }

  generatePatientId() {

    return Math.floor(Math.random() * 1000000);
  }

  debug() {
    console.log(this);
  }

  clone() {
    return { ...this };
  }

  toString() {
    return `CreatePatientDto(${this.firstName})`;
  }

}