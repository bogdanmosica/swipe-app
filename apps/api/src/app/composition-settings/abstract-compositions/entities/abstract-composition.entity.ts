import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Index,
} from 'typeorm';

import { SwipeAnimation } from '../../swipe-animations/entities/swipe-animation.entity';
import { SwipeTextStyle } from '../../swipe-text-styles/entities/swipe-text-style.entity';
import { SwipeT2sSound } from '../../swipe-t2s-sounds/entities/swipe-t2s-sound.entity';
import { VideoBackground } from '../../video-backgrounds/entities/video-background.entity';
import { UserEntityHelper } from '../../../utils/user-entity-helper';

@Entity()
export class AbstractComposition extends UserEntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  title?: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(() => VideoBackground, { eager: true })
  @Index()
  videoBackground?: VideoBackground | null;

  @ManyToOne(() => SwipeTextStyle, { eager: true })
  @Index()
  textStyle?: SwipeTextStyle | null;

  @ManyToOne(() => SwipeT2sSound, { eager: true })
  @Index()
  soundT2s?: SwipeT2sSound | null;

  @ManyToOne(() => SwipeAnimation, { eager: true })
  @Index()
  animation?: SwipeAnimation | null;
}
