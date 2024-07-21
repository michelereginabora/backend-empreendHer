import IBaseRoute from '@shared/interfaces/IBaseRoute'
import { Request, Response, Router } from 'express'
import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'

@injectable()
export class PublicationTypeRoutes implements IBaseRoute {
  constructor(
    @inject(tokens.CreatePublicationTypeController)
    private CreatePublicationTypeController: IController,

    @inject(tokens.ListPublicationTypeController)
    private ListPublicationTypeController: IController,
  ) {}

  setup() {
    const router = Router()

    router.post('/post', async (req: Request, res: Response) => {
      return await this.CreatePublicationTypeController.handle(req, res)
    })

    router.get('/list', async (req: Request, res: Response) => {
      return await this.ListPublicationTypeController.handle(req, res)
    })


    return router
  }
}
