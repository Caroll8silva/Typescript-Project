/* eslint-disable max-len */
import { getRepository } from 'typeorm';
import { Client } from '../entities/Client';

const isUnique = async (fullname: string) => {
  const repository = getRepository(Client);
  const search = await repository.findOneBy({ fullname });
  if (search) throw new Error('this client already exists');
};

export default isUnique;
