/* eslint-disable object-curly-newline */
import { Request, Response } from 'express';
// eslint-disable-next-line import/extensions
import { ClientService } from '../service/ClientService';

export class ClientController {
  async createClient(req: Request, res: Response) {
    const service = new ClientService();
    const result = await service.create(req.body);
    if (result instanceof Error) {
      return res.json(result.message);
    }
    return res.json(result);
  }

  async findClient(req: Request, res: Response) {
    const {
      fullname, gender, birthdate, age, city,
    } = req.query;
    const service = new ClientService();

    const result = await service.find({ fullname, gender, birthdate, age, city });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.status(200).json(result);
  }

  async deleteClient(req: Request, res: Response) {
    const service = new ClientService();
    const { id } = req.params;
    const result = await service.delete(id);
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.status(204).end();
  }

  async updateClient(req: Request, res: Response) {
    const { id } = req.params;
    const { fullname } = req.body;
    const service = new ClientService();
    const result = await service.update({ id, fullname });
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.status(200).json(result);
  }
}
