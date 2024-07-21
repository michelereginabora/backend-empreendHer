import { container } from 'tsyringe'
import { tokens } from '@di/tokens'
import { Config } from '@config/Config'
import { Routes } from '@presentation/http/Routes'
import { DocsController } from '@presentation/http/controllers/DocsController'
import { DocsService } from '@infrastructure/docs/DocsService'
// Service
import { CreateServiceController } from '@presentation/http/controllers/publications/services/CreateServiceController'
import { PublicationsRoutes } from '@presentation/http/routes/PublicationsRoutes'
import ServiceRepository from '@domain/publications/repositories/ServiceRepository'
import ServiceUseCase from '@domain/publications/use-cases/ServiceUseCase'
import LocationRepository from '@domain/location/repositories/LocationRepository'
import LocationUseCase from '@domain/location/use-cases/LocationUseCase'
import { LocationCreateController } from '@presentation/http/controllers/location/CreateLocationController'
import { LocationRoutes } from '@presentation/http/routes/LocationRoutes'
import PaymentMethodsRepository from '@domain/paymentMethods/repositories/PaymentMethodsRepository'
import PaymentMethodsUseCase from '@domain/paymentMethods/use-cases/PaymentMethodsUseCase'
import { CreatePaymentMethodsController } from '@presentation/http/controllers/paymentMethods/CreatePaymentMethodsController'
import { PaymentMethodsRoutes } from '@presentation/http/routes/PaymentMethodsRoutes'
import ServiceTypeRepository from '@domain/serviceType/repositories/ServiceTypeRepository'
import ServiceTypeUseCase from '@domain/serviceType/use-cases/ServiceTypeUseCase'
import { CreateServiceTypeController } from '@presentation/http/controllers/serviceType/CreateServiceTypeController'
import { ServiceTypeRoutes } from '@presentation/http/routes/ServiceTypeRoutes'
import { ListLocationController } from '@presentation/http/controllers/location/ListLocationController'
import { ListPaymentMethodsController } from '@presentation/http/controllers/paymentMethods/ListPaymentMethodsController'
import { ListServiceTypeController } from '@presentation/http/controllers/serviceType/ListServiceTypeController'
import { ListServicesController } from '@presentation/http/controllers/publications/services/ListServicesController'
import PublicationTypeRepository from '@domain/publication-type/repositories/PublicationTypeRepository'
import PublicationTypeUseCase from '@domain/publication-type/use-cases/PublicationTypeUseCase'
import { CreatePublicationTypeController } from '@presentation/http/controllers/publication-type/CreatePublicationTypeController'
import { ListPublicationTypeController } from '@presentation/http/controllers/publication-type/ListPublicationTypeController'
import { PublicationTypeRoutes } from '@presentation/http/routes/PublicationTypeRoutes'

// Location


// Creates a new child container based on root container
const childContainer = container.createChildContainer()

// App registers
childContainer.registerSingleton(tokens.Config, Config)
childContainer.registerSingleton(tokens.Routes, Routes)

// Docs
childContainer.registerSingleton(tokens.DocsController, DocsController)
childContainer.registerSingleton(tokens.DocsService, DocsService)

//Location
childContainer.registerSingleton(tokens.LocationRepository, LocationRepository)
childContainer.registerSingleton(tokens.LocationUseCase, LocationUseCase)
childContainer.registerSingleton(tokens.LocationCreateController, LocationCreateController)
childContainer.registerSingleton(tokens.LocationRoutes, LocationRoutes)
childContainer.registerSingleton(tokens.ListLocationController, ListLocationController)

// Payment Methods
childContainer.registerSingleton(tokens.PaymentMethodsRepository, PaymentMethodsRepository)
childContainer.registerSingleton(tokens.PaymentMethodsUseCase, PaymentMethodsUseCase)
childContainer.registerSingleton(tokens.CreatePaymentMethodsController, CreatePaymentMethodsController)
childContainer.registerSingleton(tokens.ListPaymentMethodsController, ListPaymentMethodsController)
childContainer.registerSingleton(tokens.PaymentMethodsRoutes, PaymentMethodsRoutes)

// Service Type
childContainer.registerSingleton(tokens.ServiceTypeRepository, ServiceTypeRepository)
childContainer.registerSingleton(tokens.ServiceTypeUseCase, ServiceTypeUseCase)
childContainer.registerSingleton(tokens.CreateServiceTypeController, CreateServiceTypeController)
childContainer.registerSingleton(tokens.ListServiceTypeController, ListServiceTypeController)
childContainer.registerSingleton(tokens.ServiceTypeRoutes, ServiceTypeRoutes)

// Publication Type
childContainer.register(tokens.PublicationTypeRepository, PublicationTypeRepository)
childContainer.register(tokens.PublicationTypeUseCase, PublicationTypeUseCase)
childContainer.register(tokens.CreatePublicationTypeController, CreatePublicationTypeController)
childContainer.register(tokens.ListPublicationTypeController, ListPublicationTypeController)
childContainer.register(tokens.PublicationTypeRoutes, PublicationTypeRoutes)

// Publications/Services
childContainer.registerSingleton(tokens.CreateServiceController, CreateServiceController)
childContainer.registerSingleton(tokens.PublicationsRoutes, PublicationsRoutes)
childContainer.registerSingleton(tokens.ServiceRepository, ServiceRepository)
childContainer.registerSingleton(tokens.ServiceUseCase, ServiceUseCase)
childContainer.registerSingleton(tokens.ListServicesController, ListServicesController)



export { childContainer as container }
