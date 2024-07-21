import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Local } from '@domain/local/entities/local.entity';
import { PaymentMethods } from '@domain/paymentMethods/entities/paymentMethods.entity';
import { ServiceType } from '@domain/serviceType/entities/serviceType.entity';

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
  @JoinColumn({ name: 'serviceType' })
  serviceType!: ServiceType;

  @ManyToOne(() => PaymentMethods)
  @JoinColumn({ name: 'paymentMethods' })
  paymentMethods!: PaymentMethods;

  @ManyToOne(() => Local, { nullable: true })
  @JoinColumn({ name: 'local' })
  local?: Local;
}
