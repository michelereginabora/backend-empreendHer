import AppDataSource from '@infrastructure/database/psql/AppDataSource'
import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'
import IPublicationTypeRepository from '../interfaces/IPublicationTypeRepository'
import { PublicationType } from '../entities/publicationType.entity'
import { IPublicationType } from '../interfaces/IPublicationType'



@injectable()
export default class PublicationTypeRepository implements IPublicationTypeRepository {
  public publicationTypeRepository: Repository<any>

  constructor() {
    this.publicationTypeRepository = AppDataSource.getRepository(PublicationType)
  }
  async save(publicationType: PublicationType): Promise<IPublicationType> {
    return await this.publicationTypeRepository.save(publicationType)
  }

  async list(): Promise<IPublicationType[]> {
    return await this.publicationTypeRepository.find()
  }

}
