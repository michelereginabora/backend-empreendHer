import { injectable, inject } from 'tsyringe'
import { DocsService } from '@infrastructure/docs/DocsService'
import { tokens } from '@di/tokens'

@injectable()
export class DocsController {
  constructor(
    @inject(tokens.DocsService)
    private docsService: DocsService
  ) {}

  /**
   * Initialize API service documentation.
   */
  public initDocs = this.docsService.initDocs

  /**
   * Returns all built docs.
   */
  public makeDocs = this.docsService.makeDocs
}
