import express from "express";
import router from "./routes";
import postgressSQL from "./infra/database/postgressSQL";


class App {

    public express;

    constructor() {

      this.express = express();
      this.routes();
      this.middlewares();

    }
    middlewares() {
        this.express.use(express.json());
      }
    
      routes() {
        router(this.express);
      }
    }
    
    module.exports = new App().express;