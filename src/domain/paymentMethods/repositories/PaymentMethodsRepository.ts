import AppDataSource from '@infrastructure/database/mysql/AppDataSource'
import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'
import { PaymentMethods } from '../entities/paymentMethods.entity'
import IPaymentMethodsRepository from '../interfaces/IPaymentMethodsRepository'
import { IPaymentMethods } from '../interfaces/IPaymentMethods'

@injectable()
export default class PaymentMethodsRepository implements IPaymentMethodsRepository {
  public paymentMethodsRepository: Repository<any>

  constructor() {
    this.paymentMethodsRepository = AppDataSource.getRepository(PaymentMethods)
  }

  async save(paymentMethods: PaymentMethods): Promise<IPaymentMethods> {
    return await this.paymentMethodsRepository.save(paymentMethods)
  }

  async list(): Promise<IPaymentMethods[]> {
    return await this.paymentMethodsRepository.find()
  }


}
