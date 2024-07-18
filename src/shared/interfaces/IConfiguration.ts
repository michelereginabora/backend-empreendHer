import { Configuration } from '@config/Config'

export default interface IConfiguration {
  get(): Configuration
  getConfigFromEnv(): Configuration
}
