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
type UpdateRequest = {
  id: string;
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

  async update({
    id, fullname, gender, birthdate, age, city,
  }: UpdateRequest) {
    const result = await repository.update({
      id,
      fullname,
      gender,
      birthdate,
      age,
      city,
    });
    return result;
  }
}
