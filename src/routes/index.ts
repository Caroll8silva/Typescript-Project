/* eslint-disable import/extensions */
import { Router } from 'express';
import { CityController } from '../app/controllers/CityController';
import { ClientController } from '../app/controllers/ClientController';
import { CreateCityValidation } from '../app/validation/city/validationCity';
import { CreateClientValidation } from '../app/validation/client/validationClient';

const routes = Router();

routes.post('/city', new CreateCityValidation().create, new CityController().createCity);
routes.get('/city', new CreateCityValidation().find, new CityController().findCity);

routes.post('/client', new CreateClientValidation().create, new ClientController().createClient);
routes.get('/client', new CreateClientValidation().find, new ClientController().findClient);
routes.get('/client/:id', new ClientController().findOneClient);
routes.delete('/client/:id', new ClientController().deleteClient);
routes.put('/client/:id', new ClientController().updateClient);
export { routes };
