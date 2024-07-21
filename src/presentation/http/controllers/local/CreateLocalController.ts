import { tokens } from '@di/tokens';
import IController from '@shared/interfaces/IController';
import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import BaseController from '../BaseController';
import ILocalUseCase from '@domain/local/interfaces/ILocalUseCase';

@injectable()
export class LocalCreateController extends BaseController implements IController {
  constructor(
    @inject(tokens.LocalUseCase)
    private localUseCase: ILocalUseCase
  ) {
    super();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name } = req.body;

      if (!name) {
        return this.error(res, 'O campo "name" é obrigatório.');
      }

      const newLocal = {
        name: name, 
      };

      const local = await this.localUseCase.create(newLocal);
      return this.success(res, 'Local criado.', local);
    } catch (err: any) {
      return this.error(res, err.message);
    }
  }
}
