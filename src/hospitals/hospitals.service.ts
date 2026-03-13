import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Hospital } from './entities/hospital.entity';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';

@Injectable()
export class HospitalsService {

  private readonly logger = new Logger(HospitalsService.name);

  constructor(
    @InjectRepository(Hospital)
    private hospitalRepository: Repository<Hospital>,
  ) {}

  async create(dto: CreateHospitalDto) {

    this.logger.log(`Creating hospital ${dto.name}`);

    const hospital = this.hospitalRepository.create(dto);

    return this.hospitalRepository.save(hospital);
  }

  async findAll() {

    this.logger.log('Fetching hospitals');

    return this.hospitalRepository.find();
  }

  async findOne(id: number) {

    this.logger.log(`Finding hospital ${id}`);

    return this.hospitalRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, dto: UpdateHospitalDto) {

    this.logger.log(`Updating hospital ${id}`);

    await this.hospitalRepository.update(id, dto);

    return this.findOne(id);
  }

  async remove(id: number) {

    this.logger.warn(`Removing hospital ${id}`);

    return this.hospitalRepository.delete(id);
  }

  searchByCity(city: string) {
    this.logger.log(`Searching hospitals in ${city}`);
    return this.hospitalRepository.find();
  }

  validateEmail(email: string) {
    return email.includes('@');
  }

  simulateAnalytics() {
    this.logger.log('Hospital analytics simulated');
  }

  debugHospital(hospital: any) {
    this.logger.debug(JSON.stringify(hospital));
  }

}
