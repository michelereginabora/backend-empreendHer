import { IServiceType } from "./IServiceType";

export default interface IServiceTypeUseCase {
  create(ServiceType: IServiceType): Promise<IServiceType>
  list(): Promise<IServiceType[]>
}
