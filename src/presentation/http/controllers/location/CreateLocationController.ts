import { tokens } from '@di/tokens';
import IController from '@shared/interfaces/IController';
import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import BaseController from '../BaseController';
import ILocationService from '@domain/location/interfaces/ILocationService';

@injectable()
export class LocationCreateController extends BaseController implements IController {
  constructor(
    @inject(tokens.LocationService)
    private locationService: ILocationService
  ) {
    super();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name } = req.body;

      if (!name) {
        return this.error(res, 'O campo "name" é obrigatório.');
      }

      const newLocation = {
        name: name, 
      };

      const location = await this.locationService.create(newLocation);
      return this.success(res, 'Local criado.', location);
    } catch (err: any) {
      return this.error(res, err.message);
    }
  }
}
