import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityHelper } from '../../utils/entity-helper';

@Entity()
export class FavoriteAuthor extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  href: string;
}
