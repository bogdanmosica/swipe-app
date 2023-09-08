import { Injectable } from '@nestjs/common';
import { CreateSwipeAnimationDto } from './dto/create-swipe-animation.dto';
import { UpdateSwipeAnimationDto } from './dto/update-swipe-animation.dto';

@Injectable()
export class SwipeAnimationsService {
  create(createSwipeAnimationDto: CreateSwipeAnimationDto) {
    return 'This action adds a new swipeAnimation';
  }

  findAll() {
    return `This action returns all swipeAnimations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} swipeAnimation`;
  }

  update(id: number, updateSwipeAnimationDto: UpdateSwipeAnimationDto) {
    return `This action updates a #${id} swipeAnimation`;
  }

  remove(id: number) {
    return `This action removes a #${id} swipeAnimation`;
  }
}
