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

import { SwipeT2sSoundsService } from './swipe-t2s-sounds.service';
import { CreateSwipeT2sSoundDto } from './dto/create-swipe-t2s-sound.dto';
import { UpdateSwipeT2sSoundDto } from './dto/update-swipe-t2s-sound.dto';

@ApiTags('Swipe T2S sounds')
@Controller({
  path: 'swipe-t2s-sounds',
  version: '1',
})
export class SwipeT2sSoundsController {
  constructor(private readonly swipeT2sSoundsService: SwipeT2sSoundsService) {}

  @Post()
  create(@Body() createSwipeT2sSoundDto: CreateSwipeT2sSoundDto) {
    return this.swipeT2sSoundsService.create(createSwipeT2sSoundDto);
  }

  @Get()
  findAll() {
    return this.swipeT2sSoundsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.swipeT2sSoundsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSwipeT2sSoundDto: UpdateSwipeT2sSoundDto
  ) {
    return this.swipeT2sSoundsService.update(+id, updateSwipeT2sSoundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.swipeT2sSoundsService.remove(+id);
  }
}
