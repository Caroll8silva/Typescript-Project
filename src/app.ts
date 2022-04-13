/* eslint-disable import/extensions */
import 'reflect-metadata';
import express from 'express';
import 'pg';
// eslint-disable-next-line import/extensions
import './infra/database/postgresSQL';
import cors from 'cors';
import { routes } from './routes';

class App {
  public express;

  constructor() {
    this.express = express();
    this.routes();
    this.middlewares();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  routes() {
    this.express.use(routes);
  }
}

export default new App().express;
