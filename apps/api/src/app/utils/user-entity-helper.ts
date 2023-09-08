import { ManyToOne, Index } from 'typeorm';
import { EntityHelper } from './entity-helper';
import { User } from '../users/entities/user.entity';

export class UserEntityHelper extends EntityHelper {
  @ManyToOne(() => User, {
    eager: true,
  })
  @Index()
  user: User;
}
