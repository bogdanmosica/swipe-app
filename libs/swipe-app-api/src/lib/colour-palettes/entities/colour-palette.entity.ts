import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ColourPalette {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  primary: string;

  @Column()
  secondary: string;

  @Column()
  accent: string;
}
