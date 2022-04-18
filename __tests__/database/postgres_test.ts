/* eslint-disable radix */
/* eslint-disable no-bitwise */
import { Connection, createConnection, getConnectionOptions } from 'typeorm';
import 'pg';

export default async (): Promise<Connection> => {
  await getConnectionOptions();
  const connections = await createConnection();
  return connections;
};
