/* eslint-disable import/extensions */
import { City } from '../entities/City';
import { CityRepository } from '../repository/CityRepository';

type CityRequest = {
    name: string;
    state: string;

}
const repository = new CityRepository();

export class CityService {
  async create({ name, state }: CityRequest): Promise<City> {
    const result = await repository.create({ name, state });
    return result;
  }

  async find() {
    const result = await repository.find();
    return result;
  }
}
