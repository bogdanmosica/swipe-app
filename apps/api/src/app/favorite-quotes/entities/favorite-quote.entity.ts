import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FavoriteAuthor } from '../../favorite-authors/entities/favorite-author.entity';
import { EntityHelper } from '../../utils/entity-helper';

@Entity()
export class FavoriteQuote extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => FavoriteAuthor, {
    eager: true,
  })
  author: FavoriteAuthor;
}
