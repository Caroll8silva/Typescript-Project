/* eslint-disable object-curly-newline */
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
 type UpdateRequest = {
  id: string;
  fullname: string;
}
export class ClientRepository {
  async create({ fullname, gender, birthdate, age, city }: ClientRequest): Promise<Client> {
    const repository = getRepository(Client);
    const client = repository.create({ fullname, gender, birthdate, age, city });
    await repository.save(client);
    console.log(client);
    return client;
  }

  async find({
    fullname, gender, birthdate, age, city,
  }: ClientRequest): Promise<Client[]> {
    const repository = getRepository(Client);
    const client = await repository.find({
      where: {
        fullname, gender, birthdate, age, city,
      },
    });
    return client;
  }

  async delete(id: string) {
    const repository = getRepository(Client);
    if (!(await repository.findOneBy({ id }))) {
      return new Error('id not found');
    }
    await repository.delete(id);
  }

  async update({ id, fullname }: UpdateRequest) {
    const repository = getRepository(Client);
    const client = await repository.findOneBy({ id });

    if (!client) { return new Error('id not found'); }
    client.fullname = fullname || client.fullname;
    await repository.save(client);
  }
}
