import { Test, TestingModule } from '@nestjs/testing';
import { SwipeT2sSoundsService } from './swipe-t2s-sounds.service';

describe('SwipeT2sSoundsService', () => {
  let service: SwipeT2sSoundsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SwipeT2sSoundsService],
    }).compile();

    service = module.get<SwipeT2sSoundsService>(SwipeT2sSoundsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
