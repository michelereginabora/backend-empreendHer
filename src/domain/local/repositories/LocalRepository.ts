import AppDataSource from '@infrastructure/database/psql/AppDataSource'
import { injectable } from 'tsyringe'
import { Repository } from 'typeorm'
import { Local } from '../entities/local.entity'
import ILocalRepository from '../interfaces/ILocalRepository'
import { ILocal } from '../interfaces/ILocal'

@injectable()
export default class LocalRepository implements ILocalRepository {
  public localRepository: Repository<any>

  constructor() {
    this.localRepository = AppDataSource.getRepository(Local)
  }

  async findOne(id: string): Promise<Local | undefined> {
    return await this.findOne(id);
  }

  async save(local: Local): Promise<ILocal> {
    return await this.localRepository.save(local)
  }

  async list(): Promise<ILocal[]> {
    return await this.localRepository.find()
  }

}
