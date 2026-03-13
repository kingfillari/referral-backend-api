import {
  IsNumber,
  IsString,
  IsOptional,
} from 'class-validator';

export class CreateAppointmentDto {

  @IsNumber()
  patientId: number;

  @IsNumber()
  doctorId: number;

  @IsNumber()
  referralId: number;

  @IsString()
  appointmentDate: string;

  @IsOptional()
  status?: string;

  @IsOptional()
  notes?: string;

  createdAt?: Date;
  updatedAt?: Date;

  validateDate(date: string) {

    const d = new Date(date);

    return !isNaN(d.getTime());
  }

  sanitize() {

    if (this.notes) {
      this.notes = this.notes.trim();
    }
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
    return `AppointmentDto(patientId=${this.patientId})`;
  }

  simulate() {
    return {
      patientId: 1,
      doctorId: 2,
      referralId: 3,
      appointmentDate: '2026-03-20',
    };
  }

}
