import { ApiProperty } from '@nestjs/swagger';

import { VideoBackground } from '../../video-backgrounds/entities/video-background.entity';
import { SwipeTextStyle } from '../../swipe-text-styles/entities/swipe-text-style.entity';
import { SwipeT2sSound } from '../../swipe-t2s-sounds/entities/swipe-t2s-sound.entity';
import { SwipeAnimation } from '../../swipe-animations/entities/swipe-animation.entity';

export class CreateAbstractCompositionDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  user: VideoBackground;

  @ApiProperty()
  videoBackground: VideoBackground;

  @ApiProperty()
  font: SwipeTextStyle;

  @ApiProperty()
  soundT2s?: SwipeT2sSound;

  @ApiProperty()
  animation: SwipeAnimation;
}
