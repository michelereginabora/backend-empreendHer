import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'
import IPublicationTypeUseCase from '../interfaces/IPublicationTypeUseCase'
import IPublicationTypeRepository from '../interfaces/IPublicationTypeRepository'
import { IPublicationType } from '../interfaces/IPublicationType'
import { PublicationType } from '../entities/publicationType.entity'


@injectable()
export default class PublicationTypeUseCase implements IPublicationTypeUseCase {
  constructor(
    @inject(tokens.PublicationTypeRepository)
    private publicationTypeRepository: IPublicationTypeRepository
  ) {}


  async create(publicationType: IPublicationType): Promise<IPublicationType> {
    const newPublicationType = new PublicationType()
    newPublicationType.name = publicationType.name
    newPublicationType.description = publicationType.description

    return await this.publicationTypeRepository.save(newPublicationType)

}

async list(): Promise<IPublicationType[]> {
  return await this.publicationTypeRepository.list()
}
}

