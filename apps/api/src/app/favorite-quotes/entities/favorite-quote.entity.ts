import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FavoriteAuthor } from '../../favorite-authors/entities/favorite-author.entity';

@Entity()
export class FavoriteQuote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => FavoriteAuthor, {
    eager: true,
  })
  author: FavoriteAuthor;
}
