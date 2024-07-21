import IBaseRoute from '@shared/interfaces/IBaseRoute'
import { Request, Response, Router } from 'express'
import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'

@injectable()
export class LocalRoutes implements IBaseRoute {
  constructor(
    @inject(tokens.LocalCreateController)
    private LocalCreateController: IController,

    @inject(tokens.ListLocalController)
    private ListLocalController: IController
  ) {}

  setup() {
    const router = Router()

    router.post('/post', async (req: Request, res: Response) => {
      return await this.LocalCreateController.handle(req, res)
    })

    router.get('/list', async (req: Request, res: Response) => {
      return await this.ListLocalController.handle(req, res)
    })

    return router
  }
}
