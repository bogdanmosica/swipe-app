import { Test, TestingModule } from '@nestjs/testing';
import { VideoBackgroundsController } from './video-backgrounds.controller';
import { VideoBackgroundsService } from './video-backgrounds.service';

describe('VideoBackgroundsController', () => {
  let controller: VideoBackgroundsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoBackgroundsController],
      providers: [VideoBackgroundsService],
    }).compile();

    controller = module.get<VideoBackgroundsController>(
      VideoBackgroundsController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
