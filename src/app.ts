/* eslint-disable import/extensions */
import 'reflect-metadata';
import express, { Router } from 'express';
import 'pg';
// eslint-disable-next-line import/extensions
import './infra/database/postgresSQL';
import { routes } from './routes';

class App {
  public express;

  constructor() {
    this.express = express();
    this.middlewares();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(routes);
  }
}

export default new App().express;
