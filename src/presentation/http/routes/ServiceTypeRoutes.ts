import IBaseRoute from '@shared/interfaces/IBaseRoute'
import { Request, Response, Router } from 'express'
import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'

@injectable()
export class ServiceTypeRoutes implements IBaseRoute {
  constructor(
    @inject(tokens.CreateServiceTypeController)
    private CreateServiceTypeController: IController,

    @inject(tokens.ListServiceTypeController)
    private ListServiceTypeController: IController,
  ) {}

  setup() {
    const router = Router()

    router.post('/post', async (req: Request, res: Response) => {
      return await this.CreateServiceTypeController.handle(req, res)
    })

    router.get('/list', async (req: Request, res: Response) => {
      return await this.ListServiceTypeController.handle(req, res)
    })


    return router
  }
}
