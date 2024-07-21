
export interface IService {
    id: string;
    title: string;
    serviceType: string;
    paymentMethods: string;
    price: number;
    deliveryTime: string;
    description: string;
    local?: string;
    publicationType?: string;
  }
  