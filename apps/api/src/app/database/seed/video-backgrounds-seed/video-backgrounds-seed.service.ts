import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { Repository } from 'typeorm';

import { VideoBackground } from '../../../video-backgrounds/entities/video-background.entity';
import path from 'path';

@Injectable()
export class VideoBackgroundsSeedService {
  constructor(
    @InjectRepository(VideoBackground)
    private repository: Repository<VideoBackground>
  ) {}

  async run() {
    const countBackgrounds = await this.repository.count();
    if (!countBackgrounds) {
      console.log(
        "Video Background: Video Background data does not exist, I'll create some data for you, from VideoBackground.json!"
      );
      const file = readFileSync(
        path.join(__dirname, 'assets/backgrounds.json'),
        'utf8'
      );
      const data = JSON.parse(file);

      await this.repository.insert(data);

      console.log('Video Background: Video Background data added!');
    }
  }
}
