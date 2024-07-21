import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'
import ILocalUseCase from '../interfaces/ILocalUseCase';
import ILocalRepository from '../interfaces/ILocalRepository';
import { ILocal } from '../interfaces/ILocal';
import { Local } from '../entities/local.entity';



@injectable()
export default class LocalUseCase implements ILocalUseCase {
  constructor(
    @inject(tokens.LocalRepository)
    private localRepository: ILocalRepository
  ) {}

  async create(local: ILocal): Promise<ILocal> {
    const newLocal = new Local()
    newLocal.name = local.name

    return await this.localRepository.save(newLocal)

}

  async list(): Promise<ILocal[]> {
    return await this.localRepository.list()
  }
}

