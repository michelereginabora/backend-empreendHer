import { ServiceType } from "../entities/serviceType.entity";
import { IServiceType } from "./IServiceType";

export default interface IServiceTypeRepository {
  save(ServiceType: ServiceType): Promise<IServiceType>
  list(): Promise<IServiceType[]>
}