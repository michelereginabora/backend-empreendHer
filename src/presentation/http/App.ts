import express, { Express, json } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { Config } from '@config/Config'
import { tokens } from '@di/tokens'
import { inject, injectable } from 'tsyringe'
import { Routes } from './Routes'

import globalHandlingErrors from './middlewares/globalHandlingErrors'

@injectable()
export class App {
  public server: Express
  constructor(
    @inject(tokens.Config)
    private config: Config,

    @inject(tokens.Routes)
    private routes: Routes
  ) {
    const { sessionSecret } = this.config.get()
    this.server = express()

    this.server.use(cookieParser(sessionSecret))
    this.server.use(bodyParser.urlencoded({ limit: '800mb', extended: true }))
    this.server.use(bodyParser.json({ limit: '800mb' }))
    this.server.use(json())    
    this.server.use(cors({ origin: true }))

    this.setupRoutes()
    this.setupErrors()
  }

  public getServer() {
    return this.server
  }

  private setupRoutes() {
    this.server.use(this.routes.setupRouter())
  }

  private setupErrors() {
    this.server.use(globalHandlingErrors)
  }
  /**
   * Listens to specified port and starts the application.
   */
  public listen() {
    const { port } = this.config.get()
    console.log(`Starting application on port ${port}`)

    this.server.listen(port)

    return this
  }
}
