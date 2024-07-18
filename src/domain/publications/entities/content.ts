import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Content {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  contentLevel!: string; // 'iniciante', 'intermediário', 'avançado'

  @Column()
  content!: string;

  @Column()
  image!: string; // Caminho da imagem ou Blob (dependendo do armazenamento)

}
