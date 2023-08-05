import { Module } from '@nestjs/common';
import { VideoBackgroundsService } from './video-backgrounds.service';
import { VideoBackgroundsController } from './video-backgrounds.controller';
import { VideoBackground } from './entities/video-background.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([VideoBackground])],
  controllers: [VideoBackgroundsController],
  providers: [VideoBackgroundsService],
  exports: [VideoBackgroundsService],
})
export class VideoBackgroundsModule {}
