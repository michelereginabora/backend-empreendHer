import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Promotion {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  eventType?: string;

  @Column()
  description!: string;

  @Column()
  link?: string;
}
