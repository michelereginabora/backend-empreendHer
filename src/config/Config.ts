import dotenv from 'dotenv'
import { injectable } from 'tsyringe'

/**
 * A simple application configuration interface.
 */
export interface Configuration {
  // HTTP port when running application
  port: number

  serviceName: string
  environment: string
  instance?: string

  observability: {
    endpoint: string
    enabled: boolean
    enableDebug?: boolean
    ignoreIncomingPaths?: string[]
  }

  logging: {
    enabled: boolean
    queueURL: string
  }

  docs: {
    enabled: boolean
  }

  mysqlDB: {
    database: string
    username: string
    password: string
    port: number
  }

  pact: {
    broker: string
    username: string
    password: string
  }

  tokenKey: string

  sessionSecret: string
}

/**
 * A simple injectable Config class, with a single `get` method that returns
 * the entire config.
 */
@injectable()
export class Config {
  private readonly config: Configuration

  constructor() {
    this.config = this.getConfigFromEnv()
  }

  public get() {
    return this.config
  }

  private getConfigFromEnv(): Configuration {
    dotenv.config()

    return {
      serviceName: process.env.SERVICE_NAME || 'no-name',
      environment: process.env.NODE_ENV || 'development',

      logging: {
        enabled: process.env.LOGGING_ENABLED === 'true',
        queueURL: process.env.LOGGING_QUEUE_URL || '',
      },

      docs: {
        enabled: process.env.DOCS_ENABLED === 'true',
      },

      observability: {
        enabled: process.env.OBSERVABILITY_TRACE_ENABLED === 'true',
        endpoint: process.env.OBSERVABILITY_JAEGER_ENDPOINT || '',
      },

      port: Number(process.env.PORT) || 80,

      mysqlDB: {
        database: process.env.MONGO_DB_DATABASE || '',
        username: process.env.DB_CONFIG_USERNAME || '',
        password: process.env.DB_CONFIG_PASSWORD || '',
        port: Number(process.env.DB_CONFIG_PORT) || 3306,
      },

      pact: {
        broker: process.env.PACT_BROKER || '',
        username: process.env.PACT_USERNAME || '',
        password: process.env.PACT_PASSWORD || '',
      },

      tokenKey: process.env.TOKEN_KEY || '',

      sessionSecret: process.env.SESSION_SECRET || '',
    }
  }
}
