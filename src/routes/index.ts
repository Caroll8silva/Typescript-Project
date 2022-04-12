/* eslint-disable import/extensions */
import { Router } from 'express';
import { CityController } from '../app/controllers/CityController';

const routes = Router();

routes.post('/city', new CityController().createCity);

export { routes };
