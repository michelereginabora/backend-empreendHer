import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'
import ILocationService from '../interfaces/ILocationService';
import ILocationRepository from '../interfaces/ILocationRepository';
import { ILocation } from '../interfaces/ILocation';
import { Location } from '../entities/location.entity';



@injectable()
export default class LocationService implements ILocationService {
  constructor(
    @inject(tokens.LocationRepository)
    private locationRepository: ILocationRepository
  ) {}

  async create(location: ILocation): Promise<ILocation> {
    const newLocation = new Location()
    newLocation.name = location.name

    return await this.locationRepository.save(newLocation)

}

  async list(): Promise<ILocation[]> {
    return await this.locationRepository.list()
  }
}

