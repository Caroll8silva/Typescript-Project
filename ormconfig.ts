import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: ['src/app/schema/*.ts'],
  synchronize: false,
  migrations: [
    'src/infra/database/postgresSQL/migrations/*.ts',
  ],
});
