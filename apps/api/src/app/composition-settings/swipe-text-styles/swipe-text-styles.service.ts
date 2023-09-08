import { Injectable } from '@nestjs/common';
import { CreateSwipeTextStyleDto } from './dto/create-swipe-text-style.dto';
import { UpdateSwipeTextStyleDto } from './dto/update-swipe-text-style.dto';

@Injectable()
export class SwipeTextStylesService {
  create(createSwipeTextStyleDto: CreateSwipeTextStyleDto) {
    return 'This action adds a new swipeTextStyle';
  }

  findAll() {
    return `This action returns all swipeTextStyles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} swipeTextStyle`;
  }

  update(id: number, updateSwipeTextStyleDto: UpdateSwipeTextStyleDto) {
    return `This action updates a #${id} swipeTextStyle`;
  }

  remove(id: number) {
    return `This action removes a #${id} swipeTextStyle`;
  }
}
