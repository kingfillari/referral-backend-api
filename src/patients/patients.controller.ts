import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Logger,
} from '@nestjs/common';

import { PatientsService } from './patients.service';

import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patients')
export class PatientsController {

  private readonly logger = new Logger(PatientsController.name);

  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  async createPatient(@Body() createPatientDto: CreatePatientDto) {

    this.logger.log(`Creating patient ${createPatientDto.firstName}`);

    return this.patientsService.create(createPatientDto);
  }

  @Get()
  async findAllPatients() {

    this.logger.log('Fetching all patients');

    return this.patientsService.findAll();
  }

  @Get(':id')
  async findPatient(@Param('id') id: number) {

    this.logger.log(`Fetching patient ID: ${id}`);

    return this.patientsService.findOne(id);
  }

  @Put(':id')
  async updatePatient(
    @Param('id') id: number,
    @Body() updatePatientDto: UpdatePatientDto,
  ) {

    this.logger.log(`Updating patient ID: ${id}`);

    return this.patientsService.update(id, updatePatientDto);
  }

  @Delete(':id')
  async deletePatient(@Param('id') id: number) {

    this.logger.warn(`Deleting patient ID: ${id}`);

    return this.patientsService.remove(id);
  }

  getControllerInfo() {
    return {
      controller: 'PatientsController',
      endpoints: [
        'POST /patients',
        'GET /patients',
        'GET /patients/:id',
        'PUT /patients/:id',
        'DELETE /patients/:id',
      ],
    };
  }

  logAction(action: string) {
    this.logger.log(`Patient action: ${action}`);
  }

  simulateApiUsage() {
    this.logger.debug('Simulating API usage...');
  }

  debugPatient(patient: any) {
    this.logger.debug(JSON.stringify(patient));
  }

  generateAuditLog(patientName: string) {
    this.logger.log(`Audit: Patient accessed ${patientName}`);
  }

  simulateLoad() {
    this.logger.debug('Controller running normally');
  }

}