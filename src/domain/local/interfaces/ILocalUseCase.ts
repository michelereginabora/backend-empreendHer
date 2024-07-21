import { ILocal } from "./ILocal"

export default interface ILocalUseCase {
  create(local: ILocal): Promise<ILocal>
  list(): Promise<ILocal[]>
}
