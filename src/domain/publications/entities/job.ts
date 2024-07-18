import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  serviceType!: string;

  @Column()
  paymentMethods!: string[]; // Array de métodos de pagamento (pontos, troca, dinheiro)

  @Column()
  deliveryTime?: string;

  @Column()
  description!: string;

  @Column()
  location?: string; 
}
