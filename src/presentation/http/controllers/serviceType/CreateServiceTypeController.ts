import { tokens } from '@di/tokens';
import IController from '@shared/interfaces/IController';
import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import BaseController from '../BaseController';
import IServiceTypeUseCase from '@domain/serviceType/interfaces/IServiceTypeUseCase';

@injectable()
export class CreateServiceTypeController extends BaseController implements IController {
  constructor(
    @inject(tokens.ServiceTypeUseCase)
    private serviceTypeUseCase: IServiceTypeUseCase
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

      const serviceType = await this.serviceTypeUseCase.create(newServiceType);
      return this.success(res, 'Tipo de serviço criado.', serviceType);
    } catch (err: any) {
      return this.error(res, err.message);
    }
  }
}
