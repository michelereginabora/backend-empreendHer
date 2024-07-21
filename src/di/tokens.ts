export const tokens = {
  // App general
  Config: Symbol('Config'),
  Logger: Symbol('Logger'),
  Routes: Symbol('Routes'),
  App: Symbol('App'),

  //Midlewares
  AuthenticationMiddleware: Symbol('AuthenticationMiddleware'),

  // Infrastructure
  DocsService: Symbol('DocsService'),
  DocsController: Symbol('DocsController'),
  StatusService: Symbol('StatusService'),

  // Location
  LocationRepository: Symbol('LocationRepository'),
  LocationUseCase: Symbol('LocationUseCase'),
  LocationCreateController: Symbol('LocationCreateController'),
  ListLocationController: Symbol('ListLocationController'),
  LocationRoutes: Symbol('LocationRoutes'),

  // PaymentMethods
  PaymentMethodsRepository: Symbol('PaymentMethodsRepository'),
  PaymentMethodsUseCase: Symbol('PaymentMethodsUseCase'),
  CreatePaymentMethodsController: Symbol('CreatePaymentMethodsController'),
  ListPaymentMethodsController: Symbol('ListPaymentMethodsController'),
  PaymentMethodsRoutes: Symbol('PaymentMethodsRoutes'),
  
  // Service Type
  ServiceTypeRepository: Symbol('ServiceTypeRepository'),
  ServiceTypeUseCase: Symbol('ServiceTypeUseCase'),
  CreateServiceTypeController: Symbol('CreateServiceTypeController'),
  ListServiceTypeController: Symbol('ListServiceTypeController'),
  ServiceTypeRoutes: Symbol('ServiceTypeRoutes'),

  // Publication Type
  PublicationTypeRepository: Symbol('PublicationTypeRepository'),
  PublicationTypeUseCase: Symbol('PublicationTypeUseCase'),
  CreatePublicationTypeController: Symbol('CreatePublicationTypeController'),
  ListPublicationTypeController: Symbol('ListPublicationTypeController'),
  PublicationTypeRoutes: Symbol('PublicationTypeRoutes'),
  
  // Publications/Services
  CreateServiceController: Symbol('CreateServiceController'),
  PublicationsRoutes: Symbol('PublicationsRoutes'),
  ServiceRepository: Symbol('ServiceRepository'),
  ServiceUseCase: Symbol('ServiceUseCase'),
  ListServicesController: Symbol('ListServicesController'),
}
