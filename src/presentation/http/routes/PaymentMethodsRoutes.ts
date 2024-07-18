import IBaseRoute from '@shared/interfaces/IBaseRoute'
import { Request, Response, Router } from 'express'
import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'

@injectable()
export class PaymentMethodsRoutes implements IBaseRoute {
  constructor(
    @inject(tokens.CreatePaymentMethodsController)
    private CreatePaymentMethodsController: IController,

    @inject(tokens.ListPaymentMethodsController)
    private ListPaymentMethodsController: IController,
  ) {}

  setup() {
    const router = Router()

    router.post('/post', async (req: Request, res: Response) => {
      return await this.CreatePaymentMethodsController.handle(req, res)
    })

    router.get('/list', async (req: Request, res: Response) => {
      return await this.ListPaymentMethodsController.handle(req, res)
    })

    return router
  }
}
