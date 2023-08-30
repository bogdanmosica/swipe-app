import { Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { EntityHelper } from '../../utils/entity-helper';

@Entity()
export class Session extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, {
    eager: true,
  })
  @Index()
  user: User;
}
