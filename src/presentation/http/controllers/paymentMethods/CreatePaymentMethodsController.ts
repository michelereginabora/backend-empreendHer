import { tokens } from '@di/tokens';
import IController from '@shared/interfaces/IController';
import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import BaseController from '../BaseController';
import IPaymentMethodsUseCase from '@domain/paymentMethods/interfaces/IPaymentMethodsUseCase';

@injectable()
export class CreatePaymentMethodsController extends BaseController implements IController {
  constructor(
    @inject(tokens.PaymentMethodsUseCase)
    private paymentMethodsUseCase: IPaymentMethodsUseCase
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

      const paymentMethod = await this.paymentMethodsUseCase.create(newPaymentMethod);
      return this.success(res, 'Método de pagamento criado.', paymentMethod);
    } catch (err: any) {
      return this.error(res, err.message);
    }
  }
}
