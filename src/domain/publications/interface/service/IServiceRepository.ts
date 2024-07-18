
import { Service } from "@domain/publications/entities/services.entity"
import { IService } from "./IService"


export default interface IServiceRepository {
  save(service: Service): Promise<IService>
  delete(id: string): Promise<void>
  list(): Promise<IService[]>
}