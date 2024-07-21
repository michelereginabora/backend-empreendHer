import AppDataSource from '@infrastructure/database/psql/AppDataSource'
import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'
import ILocationRepository from '../interfaces/ILocationRepository'
import { ILocation } from '../interfaces/ILocation'
import { Location } from '../entities/location.entity'

@injectable()
export default class LocationRepository implements ILocationRepository {
  public locationRepository: Repository<any>

  constructor() {
    this.locationRepository = AppDataSource.getRepository(Location)
  }

  async findOne(id: string): Promise<Location | undefined> {
    return await this.findOne(id);
  }

  async save(location: Location): Promise<ILocation> {
    return await this.locationRepository.save(location)
  }

  async list(): Promise<ILocation[]> {
    return await this.locationRepository.find()
  }

}
