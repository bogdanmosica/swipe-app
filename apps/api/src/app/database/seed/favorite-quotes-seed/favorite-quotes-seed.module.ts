import { Module } from '@nestjs/common';
import { FavoriteQuotesSeedService } from './favorite-quotes-seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FavoriteQuote } from '../../../composition-settings/favorite-quotes/entities/favorite-quote.entity';
import { FavoriteAuthor } from '../../../composition-settings/favorite-authors/entities/favorite-author.entity';
import { FavoriteAuthorsService } from '../../../composition-settings/favorite-authors/favorite-authors.service';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteQuote, FavoriteAuthor])],
  providers: [FavoriteQuotesSeedService, FavoriteAuthorsService],
  exports: [FavoriteQuotesSeedService],
})
export class FavoriteQuotesSeedModule {}
