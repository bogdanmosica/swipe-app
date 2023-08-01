import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteAuthorsService } from './favorite-authors.service';
import { FavoriteAuthorsController } from './favorite-authors.controller';
import { FavoriteAuthor } from './entities/favorite-author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteAuthor])],
  controllers: [FavoriteAuthorsController],
  providers: [FavoriteAuthorsService],
  exports: [FavoriteAuthorsService],
})
export class FavoriteAuthorsModule {}
