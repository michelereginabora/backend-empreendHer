import { IPublicationType } from "./IPublicationType";

export default interface IPublicationTypeUseCase {
  create(PublicationType: IPublicationType): Promise<IPublicationType>
  list(): Promise<IPublicationType[]>
}
