
import { Service } from '@domain/publications/entities/services.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('local')
export class Local {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name!: string;

  @OneToMany(() => Service, (service) => service.local)
  service!: Service;
}
