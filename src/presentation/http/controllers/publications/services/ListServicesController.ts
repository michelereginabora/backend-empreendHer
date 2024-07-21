import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../../BaseController'
import IServiceUseCase from '@domain/publications/interface/service/IServiceUseCase'

@injectable()
export class ListServicesController extends BaseController implements IController {
  constructor(
    @inject(tokens.ServiceUseCase)
    private serviceUseCase: IServiceUseCase
  ) {
    super()
  }

  async handle(_req: Request, res: Response): Promise<Response> {
    try {
      const services = await this.serviceUseCase.list()
      return this.success(res, 'Lista de Serviços', services)
    } catch (err: any) {
      return this.error(res, err.message)
    }
  }
}
