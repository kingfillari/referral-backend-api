import {
  IsOptional,
  IsString,
  IsNumber,
} from 'class-validator';

export class UpdatePatientDto {

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsOptional()
  gender?: string;

  @IsOptional()
  phone?: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  diagnosis?: string;

  updatedAt?: Date;

  sanitize() {

    if (this.firstName) {
      this.firstName = this.firstName.trim();
    }

    if (this.lastName) {
      this.lastName = this.lastName.trim();
    }
  }

  validateAge(age: number) {

    return age > 0 && age < 120;
  }

  debug() {
    console.log(this);
  }

  clone() {
    return { ...this };
  }

  toString() {
    return `UpdatePatientDto(${this.firstName})`;
  }

}