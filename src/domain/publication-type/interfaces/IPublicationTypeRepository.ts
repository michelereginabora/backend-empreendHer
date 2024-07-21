import { PublicationType } from "../entities/publicationType.entity";
import { IPublicationType } from "./IPublicationType";

export default interface IPublicationTypeRepository {
  save(PublicationType: PublicationType): Promise<IPublicationType>
  list(): Promise<IPublicationType[]>
}