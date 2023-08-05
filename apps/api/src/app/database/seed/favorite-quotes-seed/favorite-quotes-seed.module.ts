import { Module } from '@nestjs/common';
import { FavoriteQuotesSeedService } from './favorite-quotes-seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FavoriteQuote } from '../../../favorite-quotes/entities/favorite-quote.entity';
import { FavoriteAuthor } from '../../../favorite-authors/entities/favorite-author.entity';
import { FavoriteAuthorsService } from '../../../favorite-authors/favorite-authors.service';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteQuote, FavoriteAuthor])],
  providers: [FavoriteQuotesSeedService, FavoriteAuthorsService],
  exports: [FavoriteQuotesSeedService],
})
export class FavoriteQuotesSeedModule {}
