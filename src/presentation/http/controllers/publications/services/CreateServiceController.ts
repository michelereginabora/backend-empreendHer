import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../../BaseController'
import IServiceService from '@domain/publications/interface/service/IServiceServices'



@injectable()
export class CreateServiceController
  extends BaseController
  implements IController {
  constructor(
    @inject(tokens.ServiceServices)
    private publicationService: IServiceService
  ) {
    super()
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const reqNew = { ...req.body}
      const service = await this.publicationService.create(reqNew)
      return this.success(res, 'Serviço criado.', service)
    } catch (err: any) {
      return this.error(res, err.message)
    }
  }
}
