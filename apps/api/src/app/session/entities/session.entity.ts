import { Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { UserEntityHelper } from '../../utils/user-entity-helper';

/**
 * Extends with UserEntityHelper.
 *
 * @extended UserEntityHelper - adds a userId column to the table.
 */
@Entity()
export class Session extends UserEntityHelper {
  @PrimaryGeneratedColumn()
  id: number;
}
