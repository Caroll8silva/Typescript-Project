/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app from '../../../src/app';
import createConnection from '../../../src/infra/database/postgresSQL';

beforeAll(async () => {
  await createConnection();
});

afterAll(async () => {
  const connection = getConnection();
  await connection.dropDatabase();
  await connection.destroy();
});

describe('creating a city', () => {
  const cityInformation = {
    name: 'Fortaleza',
    state: 'Ceará',
  };
  it('Should be possible to create a city', async () => {
    const response = await supertest(app).post('/api/city').send(cityInformation);
    if (!response) {
      const { status } = response;
      expect(status).toBe(400);
    } else {
      const { status } = response;
      const { body } = response;
      expect(status).toBe(200);
      expect(body).toHaveProperty('id');
    }
  });
  it('Should be possible to list a city', async () => {
    const cityInformation2 = {
      name: 'Olinda',
      state: 'Pernambuco',
    };
    await supertest(app).post('/api/city').send(cityInformation2);
    const response = await supertest(app).get('/api/city');

    const { status } = response;
    expect(status).toBe(200);
  });
});
