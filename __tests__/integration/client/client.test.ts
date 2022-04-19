/* eslint-disable no-undef */
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
  it('Should be possible to create a client', async () => {
    const clientInformation = {
      fullname: 'Maria Carolinne da Silva',
      gender: 'Feminino',
      birthdate: '04/05/2002',
      age: 19,
      city: 'Olinda',
    };
    const response = await supertest(app).post('/api/client').send(clientInformation);
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
  it('Should be possible to list a client', async () => {
    const clientInformation = {
      fullname: 'Ana Silva',
      gender: 'Feminino',
      birthdate: '04/05/2000',
      age: 20,
      city: 'Paulista',
    };
    await supertest(app).post('/api/client').send(clientInformation);
    const response = await supertest(app).get('/api/client');

    const { status } = response;
    expect(status).toBe(200);
  });

  it('Should be possible to give an error when listing', async () => {
    const clientInformation = {
      fullname: 'João Ferreira',
      gender: 'Masculino',
      birthdate: '10/10/1960',
      age: 61,
      city: 'Jaboatão',
    };
    const { text } = await supertest(app).post('/api/client').send(clientInformation);
    const { id } = JSON.parse(text);
    const response = await supertest(app).get(`/api/client/${id.toString()}`);

    const { status } = response;
    expect(status).toBe(404);
  });
});
