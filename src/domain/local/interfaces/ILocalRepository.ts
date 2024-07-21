
import { Local } from "@domain/local/entities/local.entity"
import { ILocal } from "./ILocal"


export default interface ILocalRepository {
  findOne(id?: string): Promise<ILocal | undefined>;
  save(local: Local): Promise<ILocal>
  list(): Promise<ILocal[]>
}