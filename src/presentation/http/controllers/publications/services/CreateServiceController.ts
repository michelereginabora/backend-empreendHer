import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../../BaseController'
import IServiceUseCase from '@domain/publications/interface/service/IServiceUseCase'



@injectable()
export class CreateServiceController
  extends BaseController
  implements IController {
  constructor(
    @inject(tokens.ServiceUseCase)
    private publicationUseCase: IServiceUseCase
  ) {
    super()
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const reqNew = { ...req.body}
      const service = await this.publicationUseCase.create(reqNew)
      return this.success(res, 'Serviço criado.', service)
    } catch (err: any) {
      return this.error(res, err.message)
    }
  }
}
