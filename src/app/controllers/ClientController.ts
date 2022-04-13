import { Request, Response } from 'express';
// eslint-disable-next-line import/extensions
import { ClientService } from '../service/ClientService';

export class ClientController {
  async createClient(req: Request, res: Response) {
    const service = new ClientService();
    const result = await service.create(req.body);
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.json(result);
  }
}