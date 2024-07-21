
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('publication_type')
export class PublicationType {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column()
  description?: string;

}
