import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'
import IServiceTypeService from '../interfaces/IServiceTypeService'
import IServiceTypeRepository from '../interfaces/IServiceTypeRepository'
import { IServiceType } from '../interfaces/IServiceType'
import { ServiceType } from '../entities/serviceType.entity'


@injectable()
export default class ServiceTypeService implements IServiceTypeService {
  constructor(
    @inject(tokens.ServiceTypeRepository)
    private serviceTypeRepository: IServiceTypeRepository
  ) {}


  async create(serviceType: IServiceType): Promise<IServiceType> {
    const newServiceType = new ServiceType()
    newServiceType.name = serviceType.name
    newServiceType.description = serviceType.description

    return await this.serviceTypeRepository.save(newServiceType)

}

async list(): Promise<IServiceType[]> {
  return await this.serviceTypeRepository.list()
}
}

