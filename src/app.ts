import 'reflect-metadata';
import express from 'express';
import 'pg';
// eslint-disable-next-line import/extensions
import './infra/database/postgresSQL';

class App {
  public express;

  constructor() {
    this.express = express();
    this.middlewares();
  }

  middlewares() {
    this.express.use(express.json());
  }
}

export default new App().express;
