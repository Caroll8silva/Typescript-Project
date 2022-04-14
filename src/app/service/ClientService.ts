/* eslint-disable object-curly-newline */
/* eslint-disable import/extensions */
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

}
const repository = new ClientRepository();

export class ClientService {
  async create({ fullname, gender, birthdate, age, city }: ClientRequest) {
    const result = await repository.create({ fullname, gender, birthdate, age, city });
    return result;
  }

  async find({
    fullname, gender, birthdate, age, city,
  }: ClientRequest) {
    const result = await repository.find({
      fullname, gender, birthdate, age, city,
    });
    return result;
  }

  async findOne(id: string) {
    const result = await repository.findOne(id);
    return result;
  }

  async delete(id: string) {
    const result = await repository.delete(id);
    return result;
  }

  async update({ id, fullname }: UpdateRequest) {
    const result = await repository.update({ id, fullname });
    return result;
  }
}
