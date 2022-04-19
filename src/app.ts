import 'reflect-metadata';
import express from 'express';
import 'pg';
import './infra/database/postgresSQL';
import cors from 'cors';
import { pagination } from 'typeorm-pagination';
import { routes } from './routes';
import createConnection from '../src/infra/database/postgresSQL';

createConnection();

class App {
  public express;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(pagination);
  }

  routes() {
    this.express.use('/api', routes);
  }
}

export default new App().express;
