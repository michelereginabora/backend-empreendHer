import { tokens } from '@di/tokens';
import { inject, injectable } from 'tsyringe';
import IServiceRepository from '../interface/service/IServiceRepository';
import { IService } from '../interface/service/IService';
import IServiceUseCase from '../interface/service/IServiceUseCase';
import { Service } from '../entities/services.entity';
import { ICreateService } from '../interface/service/ICreateService';
import { ServiceType } from '@domain/service-type/entities/serviceType.entity';
import { PaymentMethods } from '@domain/payment-methods/entities/paymentMethods.entity';
import { Local } from '@domain/local/entities/local.entity';
import { PublicationType } from '@domain/publication-type/entities/publicationType.entity';

@injectable()
export default class ServiceUseCase implements IServiceUseCase {
  constructor(
    @inject(tokens.ServiceRepository)
    private serviceRepository: IServiceRepository
    
  ) {}

  async create(service: ICreateService): Promise<IService> {
    const { title, serviceType, description, deliveryTime, paymentMethods, local, price, publicationType } = service;

  const newService = new Service();
  newService.title = title;
  newService.serviceType = serviceType as unknown as ServiceType
  newService.description = description;
  newService.deliveryTime = deliveryTime;
  newService.paymentMethods = paymentMethods as unknown as PaymentMethods;
  newService.local = local as unknown as Local;
  newService.publicationType = publicationType as unknown as PublicationType;

  if (price !== undefined) {
    newService.price = price;
  }
  
    try {
      return await this.serviceRepository.save(newService);
    } catch (error) {
      throw new Error(`It was not possible to complete the request. There is an error in the application core. Details: ${error}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.serviceRepository.delete(id);
    } catch (error) {
      throw new Error(`It was not possible to delete the service. Details: ${error}`);
    }
  }

  async list(): Promise<IService[]> {
    return await this.serviceRepository.list()
  }
}
