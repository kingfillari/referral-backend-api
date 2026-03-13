import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
  Logger,
} from '@nestjs/common';

import { AuthService } from './auth.service';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {

  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {

    this.logger.log(`Login attempt for: ${loginDto.email}`);

    const result = await this.authService.login(loginDto);

    return {
      success: true,
      message: 'Login successful',
      data: result,
    };
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {

    this.logger.log(`Register request: ${registerDto.email}`);

    const result = await this.authService.register(registerDto);

    return {
      success: true,
      message: 'User registered successfully',
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {

    this.logger.log(`Profile requested by ${req.user.email}`);

    return {
      success: true,
      user: req.user,
    };
  }

  @Get('health')
  healthCheck() {
    return {
      module: 'AuthController',
      status: 'running',
      time: new Date(),
    };
  }

  logActivity(action: string) {
    this.logger.log(`Action performed: ${action}`);
  }

  debugUser(user: any) {
    this.logger.debug(`User Debug: ${JSON.stringify(user)}`);
  }

  simulateApiUsage() {
    this.logger.log('Simulating API usage metrics...');
  }

  logErrors(error: any) {
    this.logger.error(`Auth error: ${error.message}`);
  }

  getControllerInfo() {
    return {
      name: 'AuthController',
      version: '1.0',
      endpoints: [
        '/auth/login',
        '/auth/register',
        '/auth/profile',
      ],
    };
  }

}