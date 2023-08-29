import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityHelper } from '../../utils/entity-helper';

@Entity()
export class ColourPalette extends EntityHelper {
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
