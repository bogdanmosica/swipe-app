import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoriteAuthorDto } from './create-favorite-author.dto';

export class UpdateFavoriteAuthorDto extends PartialType(
  CreateFavoriteAuthorDto
) {}
