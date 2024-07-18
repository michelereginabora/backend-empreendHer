import 'reflect-metadata'
import { DataSource } from 'typeorm'
import OrmConfig from '../../../ormconfig'

class AppDataSource {
  public appDataSource: DataSource
  constructor() {
    this.appDataSource = new DataSource(OrmConfig)
  }
  public getDataSource(): DataSource {
    return this.appDataSource
  }
  public async initialize(): Promise<void> {
    this.appDataSource
      .initialize()
      .then(() => {
        console.log('Database successfully initiated!')
      })
      .catch((error) => console.log(error))
  }
}
const appDataSource = new AppDataSource()
export default appDataSource.getDataSource()
export { appDataSource }
