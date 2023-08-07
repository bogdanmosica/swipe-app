import { PartialType } from '@nestjs/mapped-types';
import { CreateAdministrationEntityDto } from './create-administration-entity.dto';

export class UpdateAdministrationEntityDto extends PartialType(
  CreateAdministrationEntityDto
) {}
