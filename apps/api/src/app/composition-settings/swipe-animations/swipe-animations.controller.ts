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
import { SwipeAnimationsService } from './swipe-animations.service';
import { CreateSwipeAnimationDto } from './dto/create-swipe-animation.dto';
import { UpdateSwipeAnimationDto } from './dto/update-swipe-animation.dto';

@ApiTags('Swipe Animations')
@Controller({
  path: 'swipe-animations',
  version: '1',
})
export class SwipeAnimationsController {
  constructor(
    private readonly swipeAnimationsService: SwipeAnimationsService
  ) {}

  @Post()
  create(@Body() createSwipeAnimationDto: CreateSwipeAnimationDto) {
    return this.swipeAnimationsService.create(createSwipeAnimationDto);
  }

  @Get()
  findAll() {
    return this.swipeAnimationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.swipeAnimationsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSwipeAnimationDto: UpdateSwipeAnimationDto
  ) {
    return this.swipeAnimationsService.update(+id, updateSwipeAnimationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.swipeAnimationsService.remove(+id);
  }
}
