import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { UserEntityHelper } from '../../../utils/user-entity-helper';

/**
 * Represents a text-to-speech sound configuration for Swipe.
 *
 * @remarks
 * This entity defines the sound configuration, including the unique identifier, sound type,
 * optional sound link, and additional tone details.
 *
 * @example
 * ```typescript
 * const soundConfig: SwipeT2sSound = {
 *   id: 1,
 *   type: "woman",
 *   link: "https://example.com/sounds/female-voice.mp3",
 *   toneDetails: "Friendly and enthusiastic tone."
 * };
 * ```
 */
@Entity()
export class SwipeT2sSound extends UserEntityHelper {
  /**
   * The unique identifier for the sound configuration.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The type of sound, which can be 'woman', 'male', or 'custom'.
   */
  @Column()
  type: 'woman' | 'male' | 'custom';

  /**
   * An optional link to the sound file, if applicable.
   */
  @Column({ nullable: true })
  link: string;

  /**
   * Additional details about the tone or characteristics of the sound.
   */
  @Column({ nullable: true })
  toneDetails: string;
}
