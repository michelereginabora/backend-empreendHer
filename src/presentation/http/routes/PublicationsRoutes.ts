import IBaseRoute from '@shared/interfaces/IBaseRoute'
import { Request, Response, Router } from 'express'
import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'

@injectable()
export class PublicationsRoutes implements IBaseRoute {
  constructor(
    @inject(tokens.CreateServiceController)
    private CreateServiceController: IController,

    @inject(tokens.ListServicesController)
    private ListServicesController: IController,
  ) {}

  setup() {
    const router = Router()

    router.post('/post', async (req: Request, res: Response) => {
      return await this.CreateServiceController.handle(req, res)
    })

    router.get('/list', async (req: Request, res: Response) => {
      return await this.ListServicesController.handle(req, res)
    })

    return router
  }
}
