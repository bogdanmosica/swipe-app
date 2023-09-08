import { Test, TestingModule } from '@nestjs/testing';
import { SwipeAnimationsService } from './swipe-animations.service';

describe('SwipeAnimationsService', () => {
  let service: SwipeAnimationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SwipeAnimationsService],
    }).compile();

    service = module.get<SwipeAnimationsService>(SwipeAnimationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
