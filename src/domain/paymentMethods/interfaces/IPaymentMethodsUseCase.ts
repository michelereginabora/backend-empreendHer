import { IPaymentMethods } from "./IPaymentMethods";

export default interface IPaymentMethodsUseCase {
  create(paymentMethods: IPaymentMethods): Promise<IPaymentMethods>
  list(): Promise<IPaymentMethods[]>
}
