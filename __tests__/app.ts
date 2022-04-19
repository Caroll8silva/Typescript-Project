import 'reflect-metadata';
import express from 'express';
import 'pg';
import createConnection from './database/postgres_test';
import { routes } from '../src/routes';

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
  }

  routes() {
    this.express.use('/api', routes);
  }
}

export default new App().express;
