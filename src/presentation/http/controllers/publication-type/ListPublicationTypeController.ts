import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'
import IPublicationTypeUseCase from '@domain/publication-type/interfaces/IPublicationTypeUseCase'

@injectable()
export class ListPublicationTypeController extends BaseController implements IController {
  constructor(
    @inject(tokens.PublicationTypeUseCase)
    private publicationTypeUseCase: IPublicationTypeUseCase
  ) {
    super()
  }

  async handle(_req: Request, res: Response): Promise<Response> {
    try {
      const publicationType = await this.publicationTypeUseCase.list()
      return this.success(res, 'Lista de tipos de publicações', publicationType)
    } catch (err: any) {
      return this.error(res, err.message)
    }
  }
}
