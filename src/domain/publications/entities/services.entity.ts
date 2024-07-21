import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Local } from '@domain/local/entities/local.entity';
import { PaymentMethods } from '@domain/payment-methods/entities/paymentMethods.entity';
import { ServiceType } from '@domain/service-type/entities/serviceType.entity';
import { PublicationType } from '@domain/publication-type/entities/publicationType.entity';

@Entity('service')
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column({ nullable: true, type: 'decimal', precision: 10, scale: 2 })
  price!: number;

  @Column()
  deliveryTime!: string;

  @Column('text')
  description!: string;

  @ManyToOne(() => ServiceType)
  @JoinColumn({ name: 'service_type' })
  serviceType!: ServiceType;

  @ManyToOne(() => PaymentMethods)
  @JoinColumn({ name: 'payment_methods' })
  paymentMethods!: PaymentMethods;

  @ManyToOne(() => Local, { nullable: true })
  @JoinColumn({ name: 'local' })
  local?: Local;

  @ManyToOne(() => PublicationType)
  @JoinColumn({ name: 'publication_type' })
  publicationType?: PublicationType;
}
