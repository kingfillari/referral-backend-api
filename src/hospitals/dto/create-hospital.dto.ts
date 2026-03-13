import { IsString, IsOptional, IsEmail } from 'class-validator';

export class CreateHospitalDto {

  @IsString()
  name: string;

  @IsString()
  city: string;

  @IsString()
  region: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  address: string;

  createdAt?: Date;

  updatedAt?: Date;

  validateName(name: string) {
    return name.length > 2;
  }

  sanitize() {
    this.name = this.name.trim();
    this.city = this.city.trim();
  }

  debug() {
    console.log(this);
  }

  clone() {
    return { ...this };
  }

  generateCode() {
    return Math.floor(Math.random() * 100000);
  }

  toString() {
    return `HospitalDto(${this.name})`;
  }

}
