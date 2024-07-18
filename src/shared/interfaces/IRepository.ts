import { Repository } from 'typeorm'

export default interface IRepository {
  getRepository(): Promise<Repository<any>>
}
