import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Appointment } from './entities/appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentsService {

  private readonly logger = new Logger(AppointmentsService.name);

  constructor(
    @InjectRepository(Appointment)
    private appointmentRepository: Repository<Appointment>,
  ) {}

  async create(dto: CreateAppointmentDto) {

    this.logger.log(`Creating appointment for patient ${dto.patientId}`);

    const appointment = this.appointmentRepository.create(dto);

    return this.appointmentRepository.save(appointment);
  }

  async findAll() {

    this.logger.log('Fetching all appointments');

    return this.appointmentRepository.find();
  }

  async findOne(id: number) {

    this.logger.log(`Finding appointment ID: ${id}`);

    return this.appointmentRepository.findOne({
      where: { id },
    });
  }

  async remove(id: number) {

    this.logger.warn(`Deleting appointment ${id}`);

    return this.appointmentRepository.delete(id);
  }

  validateDate(date: string) {

    const appointmentDate = new Date(date);

    return appointmentDate > new Date();
  }

  calculateWaitingDays(date: string) {

    const today = new Date();
    const appointmentDate = new Date(date);

    const diff = appointmentDate.getTime() - today.getTime();

    return Math.ceil(diff / (1000 * 3600 * 24));
  }

  simulateAnalytics() {

    this.logger.log('Generating appointment analytics...');
  }

  debugAppointment(appointment: any) {

    this.logger.debug(JSON.stringify(appointment));
  }

  checkDoctorAvailability(doctorId: number) {

    this.logger.log(`Checking availability for doctor ${doctorId}`);

    return true;
  }

  generateAppointmentCode() {

    return Math.floor(Math.random() * 1000000);
  }

}
