import { PartialType } from '@nestjs/swagger';
import { CreateSwipeT2sSoundDto } from './create-swipe-t2s-sound.dto';

export class UpdateSwipeT2sSoundDto extends PartialType(
  CreateSwipeT2sSoundDto
) {}
