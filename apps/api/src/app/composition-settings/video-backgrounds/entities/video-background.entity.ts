import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EntityHelper } from '../../../utils/entity-helper';

@Entity()
export class VideoBackground extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  platform: 'youtube' | 'other';

  @Column()
  url: string;

  @Column()
  name: string;

  @Column({ default: false })
  isStatic: boolean;

  @Column({ default: 1.0 })
  opacity: number;
}
