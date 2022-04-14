/* eslint-disable import/extensions */
import 'reflect-metadata';
import express from 'express';
import 'pg';
// eslint-disable-next-line import/extensions
import './infra/database/postgresSQL';
import cors from 'cors';
import { pagination } from 'typeorm-pagination';
import { routes } from './routes';

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
