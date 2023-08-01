import { Module } from '@nestjs/common';
import { SwipeUtilsService } from './swipe-utils.service';

@Module({
  controllers: [],
  providers: [SwipeUtilsService],
  exports: [SwipeUtilsService],
})
export class SwipeUtilsModule {}
