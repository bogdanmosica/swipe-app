import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EntityHelper } from '../../../utils/entity-helper';

/**
 * Represents a style for text within Swipe.
 *
 * @remarks
 * This entity defines the style attributes for text used within Swipe.
 * It includes properties for the style's unique identifier, name, and download URL.
 *
 * @example
 * ```typescript
 * const textStyle: SwipeTextStyle = {
 *   id: 1,
 *   name: "Heading Style",
 *   downloadUrl: "https://example.com/styles/heading-style.css"
 * };
 * ```
 */
@Entity()
export class SwipeTextStyle extends EntityHelper {
  /**
   * The unique identifier for the text style.
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * The name of the text style, used for identification.
   */
  @Column()
  name: string;

  /**
   * The URL from which the text style can be downloaded or accessed.
   */
  @Column()
  downloadUrl: string;
}
