import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Patient } from '../patients/entities/patient.entity';
import { User } from '../users/entities/user.entity';
import { Hospital } from '../hospitals/entities/hospital.entity';
import { Referral } from '../referrals/entities/referral.entity';
import { Appointment } from '../appointments/entities/appointment.entity';
import { Comment } from '../comments/entities/comment.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'rms_db',
  entities: [User, Patient, Hospital, Referral, Appointment, Comment],
  synchronize: true,