import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: ['src/app/entities/*.ts'],
  synchronize: true,
  migrations: [
    'src/infra/database/postgresSQL/migrations/*.ts',
  ],
});
