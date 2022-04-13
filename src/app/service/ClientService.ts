/* eslint-disable import/extensions */
import { Client } from '../entities/Client';
import { ClientRepository } from '../repository/ClientRepository';

type ClientRequest = {
  fullname: string;
  gender: string;
  birthdate: string;
  age: number;
  city: string
}
const repository = new ClientRepository();

export class ClientService {
  async create({
    fullname,
    gender,
    birthdate,
    age,
    city,
  }: ClientRequest): Promise<Client> {
    const result = await repository.create({
      fullname,
      gender,
      birthdate,
      age,
      city,
    });
    return result;
  }

  async find() {
    const result = await repository.find();
    return result;
  }

  async delete(id: string) {
    const result = await repository.delete(id);
    return result;
  }
}
