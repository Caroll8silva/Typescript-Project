import { Request, Response } from 'express';
// eslint-disable-next-line import/extensions
import { CityService } from '../service/CityService';

export class CityController {
  async handle(request: Request, response: Response) {
    const { name, state } = request.body;

    const service = new CityService();

    const result = await service.execute({ name, state });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
