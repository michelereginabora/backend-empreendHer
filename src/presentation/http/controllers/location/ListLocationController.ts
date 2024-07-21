import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'
import ILocationUseCase from '@domain/location/interfaces/ILocationUseCase'

@injectable()
export class ListLocationController extends BaseController implements IController {
  constructor(
    @inject(tokens.LocationUseCase)
    private locationUseCase: ILocationUseCase
  ) {
    super()
  }

  async handle(_req: Request, res: Response): Promise<Response> {
    try {
      const location = await this.locationUseCase.list()
      return this.success(res, 'Lista de locais', location)
    } catch (err: any) {
      return this.error(res, err.message)
    }
  }
}
