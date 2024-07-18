import IBaseRoute from '@shared/interfaces/IBaseRoute'
import { Request, Response, Router } from 'express'
import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'

@injectable()
export class LocationRoutes implements IBaseRoute {
  constructor(
    @inject(tokens.LocationCreateController)
    private LocationCreateController: IController,

    @inject(tokens.ListLocationController)
    private ListLocationController: IController
  ) {}

  setup() {
    const router = Router()

    router.post('/post', async (req: Request, res: Response) => {
      return await this.LocationCreateController.handle(req, res)
    })

    router.get('/list', async (req: Request, res: Response) => {
      return await this.ListLocationController.handle(req, res)
    })

    return router
  }
}
