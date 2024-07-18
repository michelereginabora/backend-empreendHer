import { ICreateService } from "./ICreateService"
import { IService } from "./IService"


export default interface IServiceService {
  create(service: ICreateService): Promise<IService>
  delete(id: string): Promise<void>
  list(): Promise<IService[]>
}
