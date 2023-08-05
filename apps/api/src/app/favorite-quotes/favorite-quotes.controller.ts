import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FavoriteQuotesService } from './favorite-quotes.service';
import { CreateFavoriteQuoteDto } from './dto/create-favorite-quote.dto';
import { UpdateFavoriteQuoteDto } from './dto/update-favorite-quote.dto';
import { FavoriteQuote } from './entities/favorite-quote.entity';

@Controller('favorite-quotes')
export class FavoriteQuotesController {
  constructor(private readonly favoriteQuotesService: FavoriteQuotesService) {}

  @Post()
  create(@Body() createFavoriteQuoteDto: CreateFavoriteQuoteDto) {
    return this.favoriteQuotesService.create(createFavoriteQuoteDto);
  }

  @Get()
  findAll() {
    return this.favoriteQuotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoriteQuotesService.findOne({ id: +id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFavoriteQuoteDto: UpdateFavoriteQuoteDto
  ) {
    return this.favoriteQuotesService.update(+id, updateFavoriteQuoteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteQuotesService.remove({ id: +id } as FavoriteQuote);
  }
}
