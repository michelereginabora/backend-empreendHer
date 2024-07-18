import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'
import ILocationService from '@domain/location/interfaces/ILocationService'

@injectable()
export class ListLocationController extends BaseController implements IController {
  constructor(
    @inject(tokens.LocationService)
    private locationService: ILocationService
  ) {
    super()
  }

  async handle(_req: Request, res: Response): Promise<Response> {
    try {
      const location = await this.locationService.list()
      return this.success(res, 'Lista de locais', location)
    } catch (err: any) {
      return this.error(res, err.message)
    }
  }
}
