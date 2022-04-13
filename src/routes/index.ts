/* eslint-disable import/extensions */
import { Router } from 'express';
import { CityController } from '../app/controllers/CityController';
import { ClientController } from '../app/controllers/ClientController';

const routes = Router();

routes.post('/city', new CityController().createCity);
routes.get('/city', new CityController().findCity);

routes.post('/client', new ClientController().createClient);
routes.get('/client', new ClientController().findClient);
routes.delete('/client/:id', new ClientController().deleteClient);
export { routes };
