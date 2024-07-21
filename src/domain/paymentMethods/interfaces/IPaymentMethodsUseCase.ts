import { IPaymentMethods } from "./IPaymentMethods";

export default interface IPaymentMethodsService {
  create(paymentMethods: IPaymentMethods): Promise<IPaymentMethods>
  list(): Promise<IPaymentMethods[]>
}
