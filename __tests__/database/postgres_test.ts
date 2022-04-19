import { Connection, createConnection, getConnectionOptions } from 'typeorm';
import 'pg';

export default async (): Promise<Connection> => {
  await getConnectionOptions();
  const connections = await createConnection();
  return connections;
};
