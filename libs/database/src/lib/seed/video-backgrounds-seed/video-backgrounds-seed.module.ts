import { Module } from '@nestjs/common';
import { VideoBackgroundsSeedService } from './video-backgrounds-seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoBackground } from '@swipe-app/swipe-app-api';

@Module({
  imports: [TypeOrmModule.forFeature([VideoBackground])],
  providers: [VideoBackgroundsSeedService],
  exports: [VideoBackgroundsSeedService],
})
export class VideoBackgroundsSeedModule {}
