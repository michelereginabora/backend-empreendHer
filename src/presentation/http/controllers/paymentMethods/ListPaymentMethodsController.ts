import { tokens } from '@di/tokens'
import IController from '@shared/interfaces/IController'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import BaseController from '../BaseController'
import IPaymentMethodsService from '@domain/paymentMethods/interfaces/IPaymentMethodsService'

@injectable()
export class ListPaymentMethodsController extends BaseController implements IController {
  constructor(
    @inject(tokens.PaymentMethodsService)
    private paymentMethodsService: IPaymentMethodsService
  ) {
    super()
  }

  async handle(_req: Request, res: Response): Promise<Response> {
    try {
      const paymentMethod = await this.paymentMethodsService.list()
      return this.success(res, 'Lista de métodos de pagamento', paymentMethod)
    } catch (err: any) {
      return this.error(res, err.message)
    }
  }
}
