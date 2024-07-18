import 'reflect-metadata'
import { App } from '@presentation/http/App'
import { container } from '@di/container'
import { appDataSource } from '@infrastructure/database/mysql/AppDataSource'

const app = container.resolve(App)

appDataSource
  .initialize()
  .then(() => {
    app.listen()
  })
  .catch((error) => console.log(error))
