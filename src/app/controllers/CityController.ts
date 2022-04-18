import { Request, Response } from 'express';
// eslint-disable-next-line import/extensions
import { CityService } from '../service/CityService';

export class CityController {
  async createCity(req: Request, res: Response) {
    const service = new CityService();
    const result = await service.create(req.body);
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.json(result);
  }

  async findCity(req: Request, res: Response) {
    const state = req.query.state as string;
    const name = req.query.name as string;
    const service = new CityService();

    const result = await service.find({ name, state });
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.status(200).json(result);
  }
}
