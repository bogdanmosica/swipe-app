import { PartialType } from '@nestjs/swagger';
import { CreateAbstractCompositionDto } from './create-abstract-composition.dto';

export class UpdateAbstractCompositionDto extends PartialType(
  CreateAbstractCompositionDto
) {}
