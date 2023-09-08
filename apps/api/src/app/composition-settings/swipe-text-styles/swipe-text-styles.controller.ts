import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SwipeTextStylesService } from './swipe-text-styles.service';
import { CreateSwipeTextStyleDto } from './dto/create-swipe-text-style.dto';
import { UpdateSwipeTextStyleDto } from './dto/update-swipe-text-style.dto';

@ApiTags('Swipe Text Styles')
@Controller({
  path: 'swipe-text-styles',
  version: '1',
})
export class SwipeTextStylesController {
  constructor(
    private readonly swipeTextStylesService: SwipeTextStylesService
  ) {}

  @Post()
  create(@Body() createSwipeTextStyleDto: CreateSwipeTextStyleDto) {
    return this.swipeTextStylesService.create(createSwipeTextStyleDto);
  }

  @Get()
  findAll() {
    return this.swipeTextStylesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.swipeTextStylesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSwipeTextStyleDto: UpdateSwipeTextStyleDto
  ) {
    return this.swipeTextStylesService.update(+id, updateSwipeTextStyleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.swipeTextStylesService.remove(+id);
  }
}
