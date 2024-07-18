import 'reflect-metadata'
import { DataSourceOptions } from 'typeorm'
import dotenv from 'dotenv'

dotenv.config()

export default {
  type: 'mysql',
  host: process.env.DB_CONFIG_HOST,
  database: process.env.DB_CONFIG_DATABASE,
  port: process.env.DB_CONFIG_PORT,
  username: process.env.DB_CONFIG_USERNAME,
  password: process.env.DB_CONFIG_PASSWORD,
  synchronize: false,
  dropSchema: false,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [
    __dirname + '/infrastructure/database/mysql/migrations/*{.ts,.js}',
  ],
  cli: {
    migrationsDir: __dirname + '/infrastructure/database/mysql/migrations',
  },
} as DataSourceOptions
