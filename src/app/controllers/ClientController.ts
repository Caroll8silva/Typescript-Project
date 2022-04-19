import { Request, Response } from 'express';
import { ClientService } from '../service/ClientService';

export class ClientController {
  async createClient(req: Request, res: Response) {
    try {
      const service = new ClientService();
      const result = await service.create(req.body);
      return res.status(200).json(result);
    } catch (error) { return res.status(400).json({ 'description:': error.message, 'name:': error.name }); }
  }

  async findClient(req: Request, res: Response) {
    try {
      const fullname = req.query.fullname as string;
      const gender = req.query.gender as string;
      const birthdate = req.query.birthdate as string;
      const age = req.query.age as any;
      const city = req.query.city as string;

      const service = new ClientService();

      const result = await service.find({
        fullname, gender, birthdate, age, city,
      });
      return res.status(200).json(result);
    } catch (error) { return res.status(400).json({ 'description:': error.message, 'name:': error.name }); }
  }

  async findOneClient(req: Request, res: Response) {
    try {
      const service = new ClientService();
      const { id } = req.params;
      const result = await service.findOne(id);
      return res.status(200).json(result);
    } catch (error) { return res.status(400).json({ 'description:': error.message, 'name:': error.name }); }
  }

  async deleteClient(req: Request, res: Response) {
    try {
      const service = new ClientService();
      const { id } = req.params;
      await service.delete(id);
      return res.status(204).end();
    } catch (error) { return res.status(400).json({ 'description:': error.message, 'name:': error.name }); }
  }

  async updateClient(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { fullname } = req.body;
      const service = new ClientService();
      const result = await service.update({ id, fullname });
      return res.status(200).json(result);
    } catch (error) { return res.status(400).json({ 'description:': error.message, 'name:': error.name }); }
  }
}
