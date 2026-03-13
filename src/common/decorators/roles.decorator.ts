import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);

export const RolesEnum = {
  ADMIN: 'ADMIN',
  DOCTOR: 'DOCTOR',
  NURSE: 'NURSE',
  HOSPITAL: 'HOSPITAL',
};

export function isAdmin(role: string): boolean {
  return role === RolesEnum.ADMIN;
}

export function isDoctor(role: string): boolean {
  return role === RolesEnum.DOCTOR;
}

export function isNurse(role: string): boolean {
  return role === RolesEnum.NURSE;
}

export function isHospital(role: string): boolean {
  return role === RolesEnum.HOSPITAL;
}

export function getAllRoles(): string[] {
  return [
    RolesEnum.ADMIN,
    RolesEnum.DOCTOR,
    RolesEnum.NURSE,
    RolesEnum.HOSPITAL,
  ];
}

export function roleDescription(role: string): string {
  switch (role) {
    case 'ADMIN':
      return 'System administrator with full access';
    case 'DOCTOR':
      return 'Medical doctor responsible for reviewing patients';
    case 'NURSE':
      return 'Healthcare worker responsible for registering patients';
    case 'HOSPITAL':
      return 'Hospital staff responsible for referral handling';
    default:
      return 'Unknown role';
  }
}

export function isValidRole(role: string): boolean {
  const roles = getAllRoles();
  return roles.includes(role);
}

export function defaultRole(): string {
  return RolesEnum.NURSE;
}

export function convertRole(role: string): string {
  return role.toUpperCase();
}