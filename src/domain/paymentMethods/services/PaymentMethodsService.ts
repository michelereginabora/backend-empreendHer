import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'
import IPaymentMethodsService from '../interfaces/IPaymentMethodsService'
import IPaymentMethodsRepository from '../interfaces/IPaymentMethodsRepository'
import { IPaymentMethods } from '../interfaces/IPaymentMethods'
import { PaymentMethods } from '../entities/paymentMethods.entity'



@injectable()
export default class PaymentMethodsService implements IPaymentMethodsService {
  constructor(
    @inject(tokens.PaymentMethodsRepository)
    private paymentMethodsRepository: IPaymentMethodsRepository
  ) {}

 
  async create(paymentMethods: IPaymentMethods): Promise<IPaymentMethods> {
    const newPaymentMethod = new PaymentMethods()
    newPaymentMethod.name = paymentMethods.name
    newPaymentMethod.description = paymentMethods.description

    return await this.paymentMethodsRepository.save(newPaymentMethod)

}

  async list(): Promise<IPaymentMethods[]> {
    return await this.paymentMethodsRepository.list()
  }
}

