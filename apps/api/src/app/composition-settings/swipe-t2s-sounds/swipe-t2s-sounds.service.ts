import { Injectable } from '@nestjs/common';
import { CreateSwipeT2sSoundDto } from './dto/create-swipe-t2s-sound.dto';
import { UpdateSwipeT2sSoundDto } from './dto/update-swipe-t2s-sound.dto';

@Injectable()
export class SwipeT2sSoundsService {
  create(createSwipeT2sSoundDto: CreateSwipeT2sSoundDto) {
    return 'This action adds a new swipeT2sSound';
  }

  findAll() {
    return `This action returns all swipeT2sSounds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} swipeT2sSound`;
  }

  update(id: number, updateSwipeT2sSoundDto: UpdateSwipeT2sSoundDto) {
    return `This action updates a #${id} swipeT2sSound`;
  }

  remove(id: number) {
    return `This action removes a #${id} swipeT2sSound`;
  }
}
