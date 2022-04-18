/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app from '../../app';
import createConnection from '../../database/postgres_test';

beforeAll(async () => {
  await createConnection();
});

afterAll(async () => {
  const connection = getConnection();
  await connection.dropDatabase();
  await connection.destroy();
});

describe('creating a city', () => {
  it('Should be possible to create a city', async () => {
    const cityInformation = {
      name: 'Fortaleza',
      state: 'Ceará',
    };
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
    const cityInformation = {
      name: 'Olinda',
      state: 'Pernambuco',
    };
    await supertest(app).post('/api/city').send(cityInformation);
    const response = await supertest(app).get('/api/city');

    const { status } = response;
    expect(status).toBe(200);
  });

  it('Should be possible to give an error when listing', async () => {
    const cityInformation = {
      name: 'Natal',
      state: 'Rio grande do norte',
    };
    const { text } = await supertest(app).post('/api/city').send(cityInformation);
    const { id } = JSON.parse(text);
    const response = await supertest(app).get(`/api/city/${id.toString()}`);

    const { status } = response;
    expect(status).toBe(404);
  });
});
