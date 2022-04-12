// eslint-disable-next-line import/extensions
import { getRepository } from 'typeorm';
// eslint-disable-next-line import/extensions
import { City } from '../entities/City';

type CityRequest = {
    name: string;
    state: string;

}
export class CityService {
  async execute({ name, state }: CityRequest): Promise<City | Error> {
    const repository = getRepository(City);

    const city = repository.create({
      name,
      state,
    });

    await repository.save(city);

    return city;
  }
}
