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

import { HospitalsService } from './hospitals.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';

@Controller('hospitals')
export class HospitalsController {

  private readonly logger = new Logger(HospitalsController.name);

  constructor(private readonly hospitalsService: HospitalsService) {}

  @Post()
  async create(@Body() dto: CreateHospitalDto) {
    this.logger.log(`Creating hospital ${dto.name}`);
    return this.hospitalsService.create(dto);
  }

  @Get()
  async findAll() {
    this.logger.log('Fetching hospitals');
    return this.hospitalsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    this.logger.log(`Fetching hospital ${id}`);
    return this.hospitalsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateHospitalDto) {
    this.logger.log(`Updating hospital ${id}`);
    return this.hospitalsService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    this.logger.warn(`Deleting hospital ${id}`);
    return this.hospitalsService.remove(id);
  }

  getControllerInfo() {
    return {
      endpoints: [
        'POST /hospitals',
        'GET /hospitals',
        'GET /hospitals/:id',
        'PUT /hospitals/:id',
        'DELETE /hospitals/:id',
      ],
    };
  }

  simulateLoad() {
    this.logger.debug('Controller simulation running');
  }

  debugHospital(hospital: any) {
    this.logger.debug(JSON.stringify(hospital));
  }

  auditAccess(name: string) {
    this.logger.log(`Access hospital: ${name}`);
  }

  testController() {
    this.logger.log('Controller test successful');
  }

}
