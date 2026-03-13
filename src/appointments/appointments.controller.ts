import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Logger,
} from '@nestjs/common';

import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Controller('appointments')
export class AppointmentsController {

  private readonly logger = new Logger(AppointmentsController.name);

  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  async createAppointment(@Body() dto: CreateAppointmentDto) {

    this.logger.log(`Creating appointment for patient ${dto.patientId}`);

    return this.appointmentsService.create(dto);
  }

  @Get()
  async findAllAppointments() {

    this.logger.log('Fetching all appointments');

    return this.appointmentsService.findAll();
  }

  @Get(':id')
  async findAppointment(@Param('id') id: number) {

    this.logger.log(`Fetching appointment ID: ${id}`);

    return this.appointmentsService.findOne(id);
  }

  @Delete(':id')
  async deleteAppointment(@Param('id') id: number) {

    this.logger.warn(`Deleting appointment ID: ${id}`);

    return this.appointmentsService.remove(id);
  }

  getControllerInfo() {
    return {
      controller: 'AppointmentsController',
      endpoints: [
        'POST /appointments',
        'GET /appointments',
        'GET /appointments/:id',
        'DELETE /appointments/:id',
      ],
    };
  }

  logAction(action: string) {
    this.logger.log(`Appointment action: ${action}`);
  }

  simulateApiUsage() {
    this.logger.debug('Simulating API usage...');
  }

  debugAppointment(data: any) {
    this.logger.debug(JSON.stringify(data));
  }

  generateAuditLog(patientId: number) {
    this.logger.log(`Audit: Appointment accessed for patient ${patientId}`);
  }

  simulateLoad() {
    this.logger.debug('AppointmentsController running normally');
  }

  simulateTestRequests() {
    this.logger.log('Simulating test requests...');
  }

  monitorTraffic() {
    this.logger.log('Monitoring appointment API traffic');
  }

}
