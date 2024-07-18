
import { Location } from "@domain/location/entities/location.entity"
import { ILocation } from "./ILocation"


export default interface ILocationRepository {
  findOne(id?: string): Promise<ILocation | undefined>;
  save(location: Location): Promise<ILocation>
  list(): Promise<ILocation[]>
}