import 'reflect-metadata';

import { createConnection } from 'typeorm';
import { Account } from './accounts/entities/account';

export const createDbConnection = async () => {
  return await createConnection({
    database: 'db.sqlite',
    entities: [Account],
    logging: false,
    synchronize: true,
    type: 'sqlite',
  });
};
