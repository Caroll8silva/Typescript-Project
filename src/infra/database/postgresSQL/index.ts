import { createConnection } from 'typeorm';
import 'pg';

class Database {
  constructor() {
    this.connect();
  }

  async connect() {
    await createConnection();
  }
}
export default new Database().connect;
