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
  LocationService: Symbol('LocationService'),
  LocationCreateController: Symbol('LocationCreateController'),
  ListLocationController: Symbol('ListLocationController'),
  LocationRoutes: Symbol('LocationRoutes'),

  // PaymentMethods
  PaymentMethodsRepository: Symbol('PaymentMethodsRepository'),
  PaymentMethodsService: Symbol('PaymentMethodsService'),
  CreatePaymentMethodsController: Symbol('CreatePaymentMethodsController'),
  ListPaymentMethodsController: Symbol('ListPaymentMethodsController'),
  PaymentMethodsRoutes: Symbol('PaymentMethodsRoutes'),
  
  // Service Type
  ServiceTypeRepository: Symbol('ServiceTypeRepository'),
  ServiceTypeService: Symbol('ServiceTypeService'),
  CreateServiceTypeController: Symbol('CreateServiceTypeController'),
  ListServiceTypeController: Symbol('ListServiceTypeController'),
  ServiceTypeRoutes: Symbol('ServiceTypeRoutes'),
  
  // Publications/Services
  CreateServiceController: Symbol('CreateServiceController'),
  PublicationsRoutes: Symbol('PublicationsRoutes'),
  ServiceRepository: Symbol('ServiceRepository'),
  ServiceServices: Symbol('ServiceServices'),
  ListServicesController: Symbol('ListServicesController'),
}
