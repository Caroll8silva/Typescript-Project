import { Connection, createConnection, getConnectionOptions } from 'typeorm';
import 'pg';

export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      type: defaultOptions.type,
      database: defaultOptions.database,
    }),
  );
};
