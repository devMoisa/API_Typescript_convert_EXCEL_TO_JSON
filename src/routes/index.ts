import { Request, Response, Router } from 'express';

import { pingController } from '../controller/ping/index';
import { convertExcelController } from '../controller/convert_xlsx_to_json_controller/index';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({
    message: 'Hello /',
  });
});

routes.get('/ping', pingController);
routes.post('/convert', convertExcelController);

export default routes;
