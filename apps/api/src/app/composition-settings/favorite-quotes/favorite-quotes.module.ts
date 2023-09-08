import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteQuotesService } from './favorite-quotes.service';
import { FavoriteQuotesController } from './favorite-quotes.controller';
import { FavoriteQuote } from './entities/favorite-quote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteQuote])],
  controllers: [FavoriteQuotesController],
  providers: [FavoriteQuotesService],
  exports: [FavoriteQuotesService],
})
export class FavoriteQuotesModule {}
