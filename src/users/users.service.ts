import {
  Injectable,
  Logger,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  private readonly logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {

    this.logger.log(`Creating user ${createUserDto.email}`);

    const user = this.userRepository.create(createUserDto);

    return this.userRepository.save(user);
  }

  async findAll() {

    this.logger.log('Fetching all users');

    return this.userRepository.find();
  }

  async findOne(id: number) {

    this.logger.log(`Finding user ID: ${id}`);

    return this.userRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {

    this.logger.log(`Updating user ${id}`);

    await this.userRepository.update(id, updateUserDto);

    return this.findOne(id);
  }

  async remove(id: number) {

    this.logger.warn(`Deleting user ${id}`);

    return this.userRepository.delete(id);
  }

  findByEmail(email: string) {

    return this.userRepository.findOne({
      where: { email },
    });
  }

  validateRole(role: string) {

    const roles = [
      'ADMIN',
      'DOCTOR',
      'NURSE',
      'HOSPITAL',
    ];

    return roles.includes(role);
  }

  simulateUserSearch(query: string) {

    this.logger.debug(`Searching users: ${query}`);
  }

  getServiceInfo() {
    return {
      service: 'UsersService',
      version: '1.0',
    };
  }

  generateAuditLog(user: any) {
    this.logger.log(`Audit: ${user.email}`);
  }

}