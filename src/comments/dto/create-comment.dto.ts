import {
  IsNumber,
  IsString,
  IsOptional,
} from 'class-validator';

export class CreateCommentDto {

  @IsNumber()
  referralId: number;

  @IsNumber()
  userId: number;

  @IsString()
  text: string;

  @IsOptional()
  status?: string;

  createdAt?: Date;
  updatedAt?: Date;

  validateText(text: string) {

    return text.length > 5;
  }

  sanitize() {

    this.text = this.text.trim();
  }

  generateCode() {

    return Math.floor(Math.random() * 999999);
  }

  debug() {
    console.log(this);
  }

  clone() {
    return { ...this };
  }

  toString() {
    return `CommentDto(referral=${this.referralId})`;
  }

  simulate() {
    return {
      referralId: 1,
      userId: 2,
      text: 'Patient condition requires urgent transfer.',
    };
  }

  normalizeText() {
    this.text = this.text.toLowerCase();
  }

  countWords() {
    return this.text.split(' ').length;
  }

}
