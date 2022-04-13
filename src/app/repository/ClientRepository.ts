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
    if (!(await repository.findOneBy({ id }))) {
      return new Error('id not found');
    }
    await repository.delete(id);
  }

  async update({
    id,
    fullname,
    gender,
    birthdate,
    age,
    city,
  }: UpdateRequest) {
    const repository = getRepository(Client);
    const client = await repository.findOneBy({ id });

    if (!client) { return new Error('id not found'); }
    client.fullname = fullname || client.fullname;
    client.gender = gender || client.gender;
    client.birthdate = birthdate || client.birthdate;
    client.age = age || client.age;
    client.city = city || client.city;

    await repository.save(client);
  }
}
