import db from 'pg';

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    const connect = new db.Client({
      user: 'postgres',
      host: 'localhost',
      database: 'TypeScript_project',
      password: 'minhaSenha',
      port: 5432,
    } || process.env.DATABASE);

    const connected = new db.Connection(connect);

    if (!connected) { console.log('Connect error'); }

    return connected;
  }
}
export default new Database().connect;
