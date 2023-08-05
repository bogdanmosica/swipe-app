import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FavoriteAuthor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  href: string;
}
