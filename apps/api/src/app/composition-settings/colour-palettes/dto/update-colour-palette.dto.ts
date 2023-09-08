import { PartialType } from '@nestjs/mapped-types';
import { CreateColourPaletteDto } from './create-colour-palette.dto';

export class UpdateColourPaletteDto extends PartialType(
  CreateColourPaletteDto
) {}
