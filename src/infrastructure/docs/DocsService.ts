import SwaggerUI from 'swagger-ui-express'
import { injectable } from 'tsyringe'
import yaml from './index'

@injectable()
export class DocsService {
  /**
   * Initialize Swagger UI.
   */
  public initDocs = SwaggerUI.serve

  /**
   * Builds all available documentation under
   */
  public makeDocs = SwaggerUI.setup(yaml)
}
