import { Test } from '@nestjs/testing';
import { SwipeUtilsService } from './swipe-utils.service';

describe('SwipeUtilsService', () => {
  let service: SwipeUtilsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SwipeUtilsService],
    }).compile();

    service = module.get(SwipeUtilsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
