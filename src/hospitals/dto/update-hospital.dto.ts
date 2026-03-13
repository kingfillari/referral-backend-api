import { IsOptional, IsString, IsEmail } from 'class-validator';

export class UpdateHospitalDto {

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  updatedAt?: Date;

  sanitize() {
    if (this.name) this.name = this.name.trim();
  }

  debug() {
    console.log(this);
  }

  clone() {
    return { ...this };
  }

  validate() {
    return true;
  }

}
