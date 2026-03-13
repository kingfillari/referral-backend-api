# Hospital Referral Management System

Backend built with **NestJS + PostgreSQL**.

## Features

- Patient Management
- Hospital Directory
- Referral Tracking
- Appointment Scheduling
- Doctor Comments
- System Analytics
- Mobile Offline Sync (Flutter)

## Stack

Backend
NestJS
PostgreSQL
TypeORM

Mobile
Flutter + SQLite

Frontend
Vue.js

## Setup

npm install

cp .env.example .env

npm run start:dev

## API

/auth
/patients
/hospitals
/referrals
/appointments
/comments
/analytics
/sync

# project structure 

referral_backend_api
│
├── src
│   │
│   ├── main.ts
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   │
│   ├── config
│   │   ├── database.config.ts
│   │   ├── jwt.config.ts
│   │   ├── app.config.ts
│   │
│   ├── common
│   │   ├── guards
│   │   │   ├── jwt-auth.guard.ts
│   │   │   ├── roles.guard.ts
│   │   │
│   │   ├── decorators
│   │   │   ├── roles.decorator.ts
│   │   │
│   │   ├── filters
│   │   │   ├── http-exception.filter.ts
│   │   │
│   │   ├── interceptors
│   │   │   ├── logging.interceptor.ts
│   │
│   ├── database
│   │   ├── database.module.ts
│   │   ├── database.providers.ts
│   │
│   ├── auth
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── jwt.strategy.ts
│   │   │
│   │   ├── dto
│   │   │   ├── login.dto.ts
│   │   │   ├── register.dto.ts
│   │
│   ├── users
│   │   ├── users.module.ts
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   │
│   │   ├── dto
│   │   │   ├── create-user.dto.ts
│   │   │   ├── update-user.dto.ts
│   │   │
│   │   ├── entities
│   │   │   ├── user.entity.ts
│   │
│   ├── patients
│   │   ├── patients.module.ts
│   │   ├── patients.controller.ts
│   │   ├── patients.service.ts
│   │   │
│   │   ├── dto
│   │   │   ├── create-patient.dto.ts
│   │   │   ├── update-patient.dto.ts
│   │   │
│   │   ├── entities
│   │   │   ├── patient.entity.ts
│   │
│   ├── hospitals
│   │   ├── hospitals.module.ts
│   │   ├── hospitals.controller.ts
│   │   ├── hospitals.service.ts
│   │   │
│   │   ├── dto
│   │   │   ├── create-hospital.dto.ts
│   │   │   ├── update-hospital.dto.ts
│   │   │
│   │   ├── entities
│   │   │   ├── hospital.entity.ts
│   │
│   ├── referrals
│   │   ├── referrals.module.ts
│   │   ├── referrals.controller.ts
│   │   ├── referrals.service.ts
│   │   │
│   │   ├── dto
│   │   │   ├── create-referral.dto.ts
│   │   │   ├── update-referral.dto.ts
│   │   │
│   │   ├── entities
│   │   │   ├── referral.entity.ts
│   │
│   ├── appointments
│   │   ├── appointments.module.ts
│   │   ├── appointments.controller.ts
│   │   ├── appointments.service.ts
│   │   │
│   │   ├── dto
│   │   │   ├── create-appointment.dto.ts
│   │   │
│   │   ├── entities
│   │   │   ├── appointment.entity.ts
│   │
│   ├── comments
│   │   ├── comments.module.ts
│   │   ├── comments.controller.ts
│   │   ├── comments.service.ts
│   │   │
│   │   ├── dto
│   │   │   ├── create-comment.dto.ts
│   │   │
│   │   ├── entities
│   │   │   ├── comment.entity.ts
│   │
│   ├── analytics
│   │   ├── analytics.module.ts
│   │   ├── analytics.controller.ts
│   │   ├── analytics.service.ts
│   │
│   └── sync
│       ├── sync.module.ts
│       ├── sync.controller.ts
│       ├── sync.service.ts
│
├── test
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
├── tsconfig.build.json
└── README.md


## Author

Fillimon (KingFillari)
