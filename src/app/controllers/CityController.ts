import { Request, Response } from 'express';
// eslint-disable-next-line import/extensions
import { CityService } from '../service/CityService';

export class CityController {
  async handle(req: Request, res: Response) {
    const service = new CityService();

    const result = await service.createCity(req.body);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }
    return res.json(result);
  }
}
