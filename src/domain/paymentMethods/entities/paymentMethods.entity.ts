
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('payment_methods')
export class PaymentMethods {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string;

  @Column()
  description?: string;

}
