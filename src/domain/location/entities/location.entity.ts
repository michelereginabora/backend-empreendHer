
import { Service } from '@domain/publications/entities/services.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('location')
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string;

  @OneToMany(() => Service, (service) => service.location)
  service!: Service;
}
