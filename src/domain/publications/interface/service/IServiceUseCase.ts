import { ICreateService } from "./ICreateService"
import { IService } from "./IService"


export default interface IServiceUseCase {
  create(service: ICreateService): Promise<IService>
  delete(id: string): Promise<void>
  list(): Promise<IService[]>
}
