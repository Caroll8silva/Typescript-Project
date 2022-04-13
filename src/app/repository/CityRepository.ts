/* eslint-disable max-len */
/* eslint-disable import/extensions */
import { getRepository } from 'typeorm';
import { City } from '../entities/City';

type CityRequest = {
    name: string;
    state: string;
}

export class CityRepository {
  async create({ name, state }: CityRequest): Promise<City> {
    const repository = getRepository(City);
    const city = repository.create({ name, state });
    await repository.save(city);
    return city;
  }

  async find({ name, state }: CityRequest): Promise<City[]> {
    const repository = getRepository(City);
    const city = await repository.find({ where: { name, state } });
    return city;
  }
}
