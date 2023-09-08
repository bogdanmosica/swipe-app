import { PartialType } from '@nestjs/swagger';
import { CreateSwipeAnimationDto } from './create-swipe-animation.dto';

export class UpdateSwipeAnimationDto extends PartialType(
  CreateSwipeAnimationDto
) {}
