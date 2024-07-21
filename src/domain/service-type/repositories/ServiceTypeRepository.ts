import AppDataSource from '@infrastructure/database/psql/AppDataSource'
import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'
import IServiceTypeRepository from '../interfaces/IServiceTypeRepository'
import { ServiceType } from '../entities/serviceType.entity'
import { IServiceType } from '../interfaces/IServiceType'


@injectable()
export default class ServiceTypeRepository implements IServiceTypeRepository {
  public serviceTypeRepository: Repository<any>

  constructor() {
    this.serviceTypeRepository = AppDataSource.getRepository(ServiceType)
  }
  async save(serviceType: ServiceType): Promise<IServiceType> {
    return await this.serviceTypeRepository.save(serviceType)
  }

  async list(): Promise<IServiceType[]> {
    return await this.serviceTypeRepository.find()
  }

}
