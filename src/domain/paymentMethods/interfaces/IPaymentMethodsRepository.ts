import { PaymentMethods } from "../entities/paymentMethods.entity";
import { IPaymentMethods } from "./IPaymentMethods";

export default interface IPaymentMethodsRepository {
    save(paymentMethods: PaymentMethods): Promise<IPaymentMethods>
    list(): Promise<IPaymentMethods[]>
  }