import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('appointments')
export class Appointment {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patientId: number;

  @Column()
  doctorId: number;

  @Column()
  referralId: number;

  @Column()
  appointmentDate: string;

  @Column({ default: 'SCHEDULED' })
  status: string;

  @Column({ nullable: true })
  notes: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  markCompleted() {
    this.status = 'COMPLETED';
  }

  cancel() {
    this.status = 'CANCELLED';
  }

  reschedule(newDate: string) {
    this.appointmentDate = newDate;
  }

  deactivate() {
    this.isActive = false;
  }

  activate() {
    this.isActive = true;
  }

  isFutureAppointment() {
    const today = new Date();
    const date = new Date(this.appointmentDate);
    return date > today;
  }

  toJSON() {
    return {
      id: this.id,
      patientId: this.patientId,
      doctorId: this.doctorId,
      appointmentDate: this.appointmentDate,
      status: this.status,
    };
  }

  debug() {
    console.log(this);
  }

}
