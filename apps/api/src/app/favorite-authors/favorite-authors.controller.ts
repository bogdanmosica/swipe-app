import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FavoriteAuthorsService } from './favorite-authors.service';
import { CreateFavoriteAuthorDto } from './dto/create-favorite-author.dto';
import { UpdateFavoriteAuthorDto } from './dto/update-favorite-author.dto';
import { FavoriteAuthor } from './entities/favorite-author.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Favorite Authors')
@Controller({
  path: 'favorite-authors',
  version: '1',
})
export class FavoriteAuthorsController {
  constructor(
    private readonly favoriteAuthorsService: FavoriteAuthorsService
  ) {}

  @Post()
  create(@Body() createFavoriteAuthorDto: CreateFavoriteAuthorDto) {
    return this.favoriteAuthorsService.create(createFavoriteAuthorDto);
  }

  @Get()
  findAll() {
    return this.favoriteAuthorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoriteAuthorsService.findOne({ id: +id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFavoriteAuthorDto: UpdateFavoriteAuthorDto
  ) {
    return this.favoriteAuthorsService.update(+id, updateFavoriteAuthorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteAuthorsService.remove({ id: +id } as FavoriteAuthor);
  }
}
