import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VideoBackground {
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
