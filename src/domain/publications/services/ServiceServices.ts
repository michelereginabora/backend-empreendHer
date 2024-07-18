import { tokens } from '@di/tokens';
import { inject, injectable } from 'tsyringe';
import IServiceRepository from '../interface/service/IServiceRepository';
import { IService } from '../interface/service/IService';
import IServiceService from '../interface/service/IServiceServices';
import { Service } from '../entities/services.entity';
import { ICreateService } from '../interface/service/ICreateService';
import { ServiceType } from '@domain/serviceType/entities/serviceType.entity';
import { PaymentMethods } from '@domain/paymentMethods/entities/paymentMethods.entity';
import { Location } from '@domain/location/entities/location.entity';

@injectable()
export default class ServiceServices implements IServiceService {
  constructor(
    @inject(tokens.ServiceRepository)
    private serviceRepository: IServiceRepository
    
  ) {}

  async create(service: ICreateService): Promise<IService> {
    const { title, serviceType, description, deliveryTime, paymentMethods, location, price } = service;

  const newService = new Service();
  newService.title = title;
  newService.serviceType = serviceType as unknown as ServiceType
  newService.description = description;
  newService.deliveryTime = deliveryTime;
  newService.paymentMethods = paymentMethods as unknown as PaymentMethods;
  newService.location = location as unknown as Location;

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
