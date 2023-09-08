import { Test, TestingModule } from '@nestjs/testing';
import { SwipeT2sSoundsController } from './swipe-t2s-sounds.controller';
import { SwipeT2sSoundsService } from './swipe-t2s-sounds.service';

describe('SwipeT2sSoundsController', () => {
  let controller: SwipeT2sSoundsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SwipeT2sSoundsController],
      providers: [SwipeT2sSoundsService],
    }).compile();

    controller = module.get<SwipeT2sSoundsController>(SwipeT2sSoundsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
