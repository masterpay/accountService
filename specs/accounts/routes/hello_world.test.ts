import { app } from '../../../src/app';
import supertest from 'supertest';
import httpStatus from 'http-status';

describe('accounts routes', () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close(() => {});
  });

  describe('GET hello', () => {
    it('Should return hello', async () => {
      const { body } = await supertest(app.server)
        .get('/accounts')
        .expect(httpStatus.OK, "hello");
    });
  });
});
