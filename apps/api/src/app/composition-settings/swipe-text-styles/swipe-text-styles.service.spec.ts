import { Test, TestingModule } from '@nestjs/testing';
import { SwipeTextStylesService } from './swipe-text-styles.service';

describe('SwipeTextStylesService', () => {
  let service: SwipeTextStylesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SwipeTextStylesService],
    }).compile();

    service = module.get<SwipeTextStylesService>(SwipeTextStylesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
