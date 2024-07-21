import { Router } from 'express'
import { inject, injectable } from 'tsyringe'
import { tokens } from '@di/tokens'
import { Config } from '@config/Config'
import { DocsController } from '@presentation/http/controllers/DocsController'
import IBaseRoute from '@shared/interfaces/IBaseRoute'


@injectable()
export class Routes {
  constructor(
    @inject(tokens.Config)
    private config: Config,

    @inject(tokens.DocsController)
    private docsController: DocsController,

    @inject(tokens.PublicationsRoutes)
    private PublicationsRoutes: IBaseRoute,

    @inject(tokens.LocationRoutes)
    private LocationRoutes: IBaseRoute,

    @inject(tokens.PaymentMethodsRoutes)
    private PaymentMethodsRoutes: IBaseRoute,

    @inject(tokens.ServiceTypeRoutes)
    private ServiceTypeRoutes: IBaseRoute,

    @inject(tokens.PublicationTypeRoutes)
    private PublicationTypeRoutes: IBaseRoute
  ) {}

  /**
   * Make domain routes available to application.
   */
  public setupRouter() {
    const router = Router()
    // Docs routes
    const { docs } = this.config.get()
    if (docs.enabled) {
      router.use('/docs', this.docsController.initDocs)
      router.get('/docs', this.docsController.makeDocs)
    }

    router.use('/publication', this.PublicationsRoutes.setup())

    router.use('/location', this.LocationRoutes.setup())

    router.use('/payment-methods', this.PaymentMethodsRoutes.setup())

    router.use('/service-type', this.ServiceTypeRoutes.setup())

    router.use('/publication-type', this.PublicationTypeRoutes.setup())

    return router
  }
}
