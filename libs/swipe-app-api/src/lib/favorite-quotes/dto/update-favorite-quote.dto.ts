import { PartialType } from '@nestjs/mapped-types';
import { CreateFavoriteQuoteDto } from './create-favorite-quote.dto';

export class UpdateFavoriteQuoteDto extends PartialType(
  CreateFavoriteQuoteDto
) {}
