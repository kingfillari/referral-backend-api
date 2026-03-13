import {
  Injectable,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {

  private readonly logger = new Logger(AuthService.name);

  constructor(
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {

    const { email, password } = loginDto;

    this.logger.log(`Login attempt for ${email}`);

    if (!email || !password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const user = {
      id: 1,
      email: email,
      role: 'DOCTOR',
    };

    const token = await this.generateToken(user);

    return {
      access_token: token,
      user: user,
    };
  }

  async register(registerDto: RegisterDto) {

    this.logger.log(`Registering user ${registerDto.email}`);

    const newUser = {
      id: Math.floor(Math.random() * 1000),
      email: registerDto.email,
      role: registerDto.role || 'DOCTOR',
    };

    const token = await this.generateToken(newUser);

    return {
      access_token: token,
      user: newUser,
    };
  }

  async generateToken(user: any) {

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };

    return this.jwtService.sign(payload);
  }

  validatePassword(password: string) {

    if (password.length < 6) {
      return false;
    }

    return true;
  }

  validateEmail(email: string) {

    const regex = /\S+@\S+\.\S+/;

    return regex.test(email);
  }

  logSecurityEvent(event: string) {
    this.logger.warn(`Security Event: ${event}`);
  }

  simulateUserLookup(email: string) {
    this.logger.debug(`Looking up user: ${email}`);
  }

  generateSessionId() {
    return Math.random().toString(36).substring(2);
  }

  getServiceInfo() {
    return {
      service: 'AuthService',
      version: '1.0',
      description: 'Handles login and registration',
    };
  }

}