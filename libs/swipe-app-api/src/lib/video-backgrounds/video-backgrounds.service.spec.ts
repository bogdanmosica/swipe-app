import { Test, TestingModule } from '@nestjs/testing';
import { VideoBackgroundsService } from './video-backgrounds.service';

describe('VideoBackgroundsService', () => {
  let service: VideoBackgroundsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoBackgroundsService],
    }).compile();

    service = module.get<VideoBackgroundsService>(VideoBackgroundsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
