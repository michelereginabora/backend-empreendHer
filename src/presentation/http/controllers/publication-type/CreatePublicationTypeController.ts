import { tokens } from '@di/tokens';
import IController from '@shared/interfaces/IController';
import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import BaseController from '../BaseController';
import IPublicationTypeUseCase from '@domain/publication-type/interfaces/IPublicationTypeUseCase';

@injectable()
export class CreatePublicationTypeController extends BaseController implements IController {
  constructor(
    @inject(tokens.PublicationTypeUseCase)
    private publicationTypeUseCase: IPublicationTypeUseCase
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

      const newPublicationType = {
        name: name, 
        description: description
      };

      const publicationType = await this.publicationTypeUseCase.create(newPublicationType);
      return this.success(res, 'Tipo de serviço criado.', publicationType);
    } catch (err: any) {
      return this.error(res, err.message);
    }
  }
}