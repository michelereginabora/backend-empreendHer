export interface ICreateService {
    id: string;
    title: string;
    serviceType: string;
    paymentMethods: string;
    price: number;
    deliveryTime: string;
    description: string;
    location?: string;
  }
  