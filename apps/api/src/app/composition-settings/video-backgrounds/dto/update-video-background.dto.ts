import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoBackgroundDto } from './create-video-background.dto';

export class UpdateVideoBackgroundDto extends PartialType(
  CreateVideoBackgroundDto
) {}
