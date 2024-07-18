import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'
import IServiceTypeService from '@domain/serviceType/interfaces/IServiceTypeService'

@injectable()
export class ListServiceTypeController extends BaseController implements IController {
  constructor(
    @inject(tokens.ServiceTypeService)
    private serviceTypeService: IServiceTypeService
  ) {
    super()
  }

  async handle(_req: Request, res: Response): Promise<Response> {
    try {
      const serviceType = await this.serviceTypeService.list()
      return this.success(res, 'Lista de tipos de serviço', serviceType)
    } catch (err: any) {
      return this.error(res, err.message)
    }
  }
}
