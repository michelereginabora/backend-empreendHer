
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('service_type')
export class ServiceType {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string;

  @Column()
  description?: string;

}
