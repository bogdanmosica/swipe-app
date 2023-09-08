import { Module } from '@nestjs/common';
import { VideoBackgroundsSeedService } from './video-backgrounds-seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoBackground } from '../../../composition-settings/video-backgrounds/entities/video-background.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoBackground])],
  providers: [VideoBackgroundsSeedService],
  exports: [VideoBackgroundsSeedService],
})
export class VideoBackgroundsSeedModule {}
