import { Module } from '@nestjs/common';
import { SwipeT2sSoundsService } from './swipe-t2s-sounds.service';
import { SwipeT2sSoundsController } from './swipe-t2s-sounds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SwipeT2sSound } from './entities/swipe-t2s-sound.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SwipeT2sSound])],
  controllers: [SwipeT2sSoundsController],
  providers: [SwipeT2sSoundsService],
  exports: [SwipeT2sSoundsService],
})
export class SwipeT2sSoundsModule {}
