import { EntityHelper } from '../../../utils/entity-helper';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

enum AnimationType {
  FADE_IN = 'fade-in',
  SLIDE_IN = 'slide-in',
  BOUNCE = 'bounce',
  // Add more animation types here
}
@Entity()
export class SwipeAnimation extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: AnimationType,
    array: true,
  })
  animationTypes: AnimationType[];
}
