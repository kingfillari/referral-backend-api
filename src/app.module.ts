import { Module, Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PatientsModule } from './patients/patients.module';
import { HospitalsModule } from './hospitals/hospitals.module';
import { ReferralsModule } from './referrals/referrals.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { CommentsModule } from './comments/comments.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { SyncModule } from './sync/sync.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    PatientsModule,
    HospitalsModule,
    ReferralsModule,
    AppointmentsModule,
    CommentsModule,
    AnalyticsModule,
    SyncModule,
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}