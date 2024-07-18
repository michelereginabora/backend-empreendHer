import { tokens } from '@di/tokens';
import IController from '@shared/interfaces/IController';
import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import BaseController from '../BaseController';
import IServiceTypeService from '@domain/serviceType/interfaces/IServiceTypeService';

@injectable()
export class CreateServiceTypeController extends BaseController implements IController {
  constructor(
    @inject(tokens.ServiceTypeService)
    private serviceTypeService: IServiceTypeService
  ) {
    super();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name } = req.body;
      const { description } = req.body

      if (!name) {
        return this.error(res, 'O campo "name" é obrigatório.');
      }

      const newServiceType = {
        name: name, 
        description: description
      };

      const serviceType = await this.serviceTypeService.create(newServiceType);
      return this.success(res, 'Tipo de serviço criado.', serviceType);
    } catch (err: any) {
      return this.error(res, err.message);
    }
  }
}
