import db from 'pg';

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    const { env } = process;
    const connect = new db.Client({
      user: env.CONNECTION,
      host: env.HOST,
      database: env.DATABASE,
      password: env.PASSWORD,
      port: 5432,
      migrations: env.MIGRATIONS,
    });

    const connected = new db.Connection(connect);

    if (!connected) { console.log('Connect error'); }

    return connected;
  }
}
export default new Database().connect;
