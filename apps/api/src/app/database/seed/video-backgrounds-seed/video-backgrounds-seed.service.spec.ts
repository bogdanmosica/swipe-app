import { Test, TestingModule } from '@nestjs/testing';
import { VideoBackgroundsSeedService } from './video-backgrounds-seed.service';

describe('VideoBackgroundsSeedService', () => {
  let service: VideoBackgroundsSeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoBackgroundsSeedService],
    }).compile();

    service = module.get<VideoBackgroundsSeedService>(
      VideoBackgroundsSeedService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
