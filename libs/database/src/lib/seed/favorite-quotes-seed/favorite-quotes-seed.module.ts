import { Module } from '@nestjs/common';
import { FavoriteQuotesSeedService } from './favorite-quotes-seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  FavoriteAuthor,
  FavoriteAuthorsService,
  FavoriteQuote,
} from '@swipe-app/swipe-app-api';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteQuote, FavoriteAuthor])],
  providers: [FavoriteQuotesSeedService, FavoriteAuthorsService],
  exports: [FavoriteQuotesSeedService],
})
export class FavoriteQuotesSeedModule {}
