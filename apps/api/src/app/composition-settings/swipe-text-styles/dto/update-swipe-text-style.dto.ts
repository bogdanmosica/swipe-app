import { PartialType } from '@nestjs/swagger';
import { CreateSwipeTextStyleDto } from './create-swipe-text-style.dto';

export class UpdateSwipeTextStyleDto extends PartialType(
  CreateSwipeTextStyleDto
) {}
