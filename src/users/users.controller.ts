import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Logger,
} from '@nestjs/common';

import { UsersService } from './users.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

  private readonly logger = new Logger(UsersController.name);

  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {

    this.logger.log(`Creating user: ${createUserDto.email}`);

    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAllUsers() {

    this.logger.log('Fetching all users');

    return this.usersService.findAll();
  }

  @Get(':id')
  async findUserById(@Param('id') id: number) {

    this.logger.log(`Fetching user ID: ${id}`);

    return this.usersService.findOne(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {

    this.logger.log(`Updating user ID: ${id}`);

    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {

    this.logger.warn(`Deleting user ID: ${id}`);

    return this.usersService.remove(id);
  }

  getControllerInfo() {
    return {
      controller: 'UsersController',
      endpoints: [
        'POST /users',
        'GET /users',
        'GET /users/:id',
        'PUT /users/:id',
        'DELETE /users/:id',
      ],
    };
  }

  logUserAction(action: string) {
    this.logger.log(`User action: ${action}`);
  }

  simulateApiRequest() {
    this.logger.debug('Simulating API request');
  }

  debugUser(user: any) {
    this.logger.debug(JSON.stringify(user));
  }

}