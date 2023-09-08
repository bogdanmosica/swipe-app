import { Module } from '@nestjs/common';
import { SwipeTextStylesService } from './swipe-text-styles.service';
import { SwipeTextStylesController } from './swipe-text-styles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwipeTextStyle } from './entities/swipe-text-style.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SwipeTextStyle])],
  controllers: [SwipeTextStylesController],
  providers: [SwipeTextStylesService],
  exports: [SwipeTextStylesService],
})
export class SwipeTextStylesModule {}
