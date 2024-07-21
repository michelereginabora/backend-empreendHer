import AppDataSource from '@infrastructure/database/psql/AppDataSource'
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
        local: true,
        paymentMethods: true,
        serviceType: true,
        publicationType: true
      },

    });
  
    return services;
  }
}
