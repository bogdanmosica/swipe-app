import { Module } from '@nestjs/common';
import { FavoriteAuthorsSeedService } from './favorite-authors-seed.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteAuthor } from '../../../favorite-authors/entities/favorite-author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteAuthor])],
  providers: [FavoriteAuthorsSeedService],
  exports: [FavoriteAuthorsSeedService],
})
export class FavoriteAuthorsSeedModule {}
