import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'
import IServiceTypeUseCase from '@domain/serviceType/interfaces/IServiceTypeUseCase'

@injectable()
export class ListServiceTypeController extends BaseController implements IController {
  constructor(
    @inject(tokens.ServiceTypeUseCase)
    private serviceTypeUseCase: IServiceTypeUseCase
  ) {
    super()
  }

  async handle(_req: Request, res: Response): Promise<Response> {
    try {
      const serviceType = await this.serviceTypeUseCase.list()
      return this.success(res, 'Lista de tipos de serviço', serviceType)
    } catch (err: any) {
      return this.error(res, err.message)
    }
  }
}
