import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AdministrationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  apiUrl: string;

  @Column()
  secondary: string;

  @Column()
  accent: string;
}
