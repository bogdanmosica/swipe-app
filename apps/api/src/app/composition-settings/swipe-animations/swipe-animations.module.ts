import { Module } from '@nestjs/common';
import { SwipeAnimationsService } from './swipe-animations.service';
import { SwipeAnimationsController } from './swipe-animations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwipeAnimation } from './entities/swipe-animation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SwipeAnimation])],
  controllers: [SwipeAnimationsController],
  providers: [SwipeAnimationsService],
  exports: [SwipeAnimationsService],
})
export class SwipeAnimationsModule {}
