import { ILocation } from "./ILocation"

export default interface ILocationUseCase {
  create(location: ILocation): Promise<ILocation>
  list(): Promise<ILocation[]>
}
