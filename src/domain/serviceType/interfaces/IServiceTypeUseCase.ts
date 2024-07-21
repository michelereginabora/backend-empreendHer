import { IServiceType } from "./IServiceType";

export default interface IServiceTypeService {
  create(ServiceType: IServiceType): Promise<IServiceType>
  list(): Promise<IServiceType[]>
}
