import { ILocation } from "./ILocation"

export default interface ILocationService {
  create(location: ILocation): Promise<ILocation>
  list(): Promise<ILocation[]>
}
