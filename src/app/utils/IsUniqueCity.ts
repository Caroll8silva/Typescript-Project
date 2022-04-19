/* eslint-disable max-len */
import { getRepository } from 'typeorm';
import { City } from '../entities/City';

const isUnique = async (name: string) => {
  const repository = getRepository(City);
  const search = await repository.findOneBy({ name });
  if (search) throw new Error('this city already exists');
};

export default isUnique;
