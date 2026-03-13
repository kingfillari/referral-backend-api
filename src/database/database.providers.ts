import { DataSource } from 'typeorm';
import { databaseConfig } from '../config/database.config';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource(databaseConfig);

      if (!dataSource.isInitialized) {
        await dataSource.initialize();
        console.log('PostgreSQL Database Connected');
      }

      return dataSource;
    },
  },
];

export async function closeDatabase(dataSource: DataSource) {
  if (dataSource && dataSource.isInitialized) {
    await dataSource.destroy();
    console.log('Database connection closed');
  }
}

export function getDatabaseInfo(dataSource: DataSource) {
  return {
    database: dataSource.options.database,
    type: dataSource.options.type,
  };
}