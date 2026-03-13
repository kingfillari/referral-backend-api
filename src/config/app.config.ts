export const appConfig = {
  appName: 'Referral Management System Backend',
  environment: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT) || 3000,
  defaultUserPassword: process.env.DEFAULT_USER_PASSWORD || '123456',
  defaultAdminEmail: process.env.DEFAULT_ADMIN_EMAIL || 'admin@rms.com',
  defaultAdminRole: 'ADMIN',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:4200',
};