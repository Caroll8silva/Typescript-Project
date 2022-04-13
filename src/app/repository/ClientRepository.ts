/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import { getRepository } from 'typeorm';
import { Client } from '../entities/Client';

type ClientRequest = {
    fullname: string;
    gender: string;
    birthdate: string;
    age: number;
    city: string
}

export class ClientRepository {
  async create({
    fullname,
    gender,
    birthdate,
    age,
    city,
  }: ClientRequest): Promise<Client> {
    const repository = getRepository(Client);
    const client = repository.create({
      fullname,
      gender,
      birthdate,
      age,
      city,
    });
    await repository.save(client);
    return client;
  }

  async find() {
    const repository = getRepository(Client);
    const client = await repository.find();
    return client;
  }

  async delete(id: string) {
    const repository = getRepository(Client);
    if (!(await repository.findBy({ id }))) {
      return new Error('id not found');
    }
    await repository.delete(id);
  }
}
