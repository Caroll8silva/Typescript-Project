import { Request, Response } from 'express';
import { CityService } from '../service/CityService';

export class CityController {
  async createCity(req: Request, res: Response) {
    try {
      const service = new CityService();
      const result = await service.create(req.body);
      if (result instanceof Error) {
        return res.status(400).json(result.message);
      }
      return res.status(200).json(result);
    } catch (error) { return res.status(400).json({ 'description:': error.message, 'name:': error.name }); }
  }

  async findCity(req: Request, res: Response) {
    try {
      const state = req.query.state as string;
      const name = req.query.name as string;
      const service = new CityService();

      const result = await service.find({ name, state });
      return res.status(200).json(result);
    } catch (error) { return res.status(400).json({ 'description:': error.message, 'name:': error.name }); }
  }
}
