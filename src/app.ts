import express from 'express';
import pg, { Connection } from 'pg';

pg.Connection = Connection;

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
