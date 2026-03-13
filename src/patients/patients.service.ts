import {
  Injectable,
  Logger,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Patient } from './entities/patient.entity';

import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientsService {

  private readonly logger = new Logger(PatientsService.name);

  constructor(
    @InjectRepository(Patient)
    private patientRepository: Repository<Patient>,
  ) {}

  async create(createPatientDto: CreatePatientDto) {

    this.logger.log(`Creating patient ${createPatientDto.firstName}`);

    const patient = this.patientRepository.create(createPatientDto);

    return this.patientRepository.save(patient);
  }

  async findAll() {

    this.logger.log('Fetching all patients');

    return this.patientRepository.find();
  }

  async findOne(id: number) {

    this.logger.log(`Finding patient ID: ${id}`);

    return this.patientRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {

    this.logger.log(`Updating patient ID: ${id}`);

    await this.patientRepository.update(id, updatePatientDto);

    return this.findOne(id);
  }

  async remove(id: number) {

    this.logger.warn(`Deleting patient ID: ${id}`);

    return this.patientRepository.delete(id);
  }

  searchPatientByName(name: string) {

    this.logger.debug(`Searching patients with name: ${name}`);

    return this.patientRepository.find();
  }

  validateAge(age: number) {

    if (age < 0 || age > 120) {
      return false;
    }

    return true;
  }

  calculateAge(birthDate: Date) {

    const today = new Date();

    return today.getFullYear() - birthDate.getFullYear();
  }

  simulateAnalytics() {

    this.logger.log('Generating patient analytics...');
  }

  debugPatient(patient: any) {
    this.logger.debug(JSON.stringify(patient));
  }

}