/* eslint-disable max-len */
/* eslint-disable import/extensions */
import { getRepository } from 'typeorm';
import { Request } from 'express';
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

  async find(req: Request) {
    const repository = getRepository(City);
    const name: string = String(req.query.name);
    const city = await repository.find({ where: { name } });
    return city;
  }
}
