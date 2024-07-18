import AppDataSource from '@infrastructure/database/mysql/AppDataSource'
import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'
import { Service } from '../entities/services.entity'
import IServiceRepository from '../interface/service/IServiceRepository'
import { IService } from '../interface/service/IService'


@injectable()
export default class ServiceRepository implements IServiceRepository {
  public serviceRepository: Repository<any>

  constructor() {
    this.serviceRepository = AppDataSource.getRepository(Service)
  }

  async save(service: Service): Promise<IService> {
    return await this.serviceRepository.save(service)
  }

  async delete(id: string): Promise<void> {
    await this.serviceRepository.delete(id)
  }

  async list(): Promise<IService[]> {
    const services = await this.serviceRepository.find({
      relations: {
        location: true,
        paymentMethods: true,
        serviceType: true
      },

    });
  
    return services;
  }
}
