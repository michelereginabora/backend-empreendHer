import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'
import ILocalUseCase from '@domain/local/interfaces/ILocalUseCase'

@injectable()
export class ListLocalController extends BaseController implements IController {
  constructor(
    @inject(tokens.LocalUseCase)
    private localUseCase: ILocalUseCase
  ) {
    super()
  }

  async handle(_req: Request, res: Response): Promise<Response> {
    try {
      const local = await this.localUseCase.list()
      return this.success(res, 'Lista de locais', local)
    } catch (err: any) {
      return this.error(res, err.message)
    }
  }
}
