import { app } from '../../../src/app';
import { createDbConnection } from '../../../src/database';
import { Connection } from 'typeorm';
import supertest from 'supertest';
import httpStatus from 'http-status';

describe('accounts routes', () => {
  let connection: Connection;
  beforeAll(async () => {
    connection = await createDbConnection();
    await app.ready();
  });

  afterAll(async () => {
    await connection.close();
    await app.close(() => {});
  });

  describe('GET accounts', () => {
    it('Should return an empty list', async () => {
      const { body } = await supertest(app.server)
        .get('/accounts')
        .expect(httpStatus.OK, '[]');
    });
  });
});
