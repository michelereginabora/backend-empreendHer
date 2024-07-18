import { tokens } from '@di/tokens';
import IController from '@shared/interfaces/IController';
import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import BaseController from '../BaseController';
import IPaymentMethodsService from '@domain/paymentMethods/interfaces/IPaymentMethodsService';

@injectable()
export class CreatePaymentMethodsController extends BaseController implements IController {
  constructor(
    @inject(tokens.PaymentMethodsService)
    private paymentMethodService: IPaymentMethodsService
  ) {
    super();
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name } = req.body;
      const { description } = req.body

      if (!name) {
        return this.error(res, 'O campo "name" é obrigatório.');
      }

      const newPaymentMethod = {
        name: name, 
        description: description
      };

      const paymentMethod = await this.paymentMethodService.create(newPaymentMethod);
      return this.success(res, 'Método de pagamento criado.', paymentMethod);
    } catch (err: any) {
      return this.error(res, err.message);
    }
  }
}
