import supertest from 'supertest';
import cityEntities from '../../../src/app/entities/City';
import app from '../../../src/app';

beforeAll(async () => {
  const cityInformation = {
    name: 'Olinda',
    state: 'Pernambuco',
  };

  await supertest(app).post('/api/city').send(cityInformation);
});

beforeEach(async () => {
  await cityEntities.deleteMany();
});

describe('creating a city', () => {
  const cityInformation = {
    name: 'Olinda',
    state: 'Pernambuco',
  };
  it('Should be possible to create a city', async () => {
    const response = await supertest(app).post('/api/city').send(cityInformation);
    if (!response) {
      const { status } = response;
      expect(status).toBe(400);
    } else {
      const { status } = response;
      const { body } = response;
      expect(status).toBe(201);
      expect(body).toHaveProperty('_id');
    }
  });
});
