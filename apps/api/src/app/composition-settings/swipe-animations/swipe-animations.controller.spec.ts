import { Test, TestingModule } from '@nestjs/testing';
import { SwipeAnimationsController } from './swipe-animations.controller';
import { SwipeAnimationsService } from './swipe-animations.service';

describe('SwipeAnimationsController', () => {
  let controller: SwipeAnimationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SwipeAnimationsController],
      providers: [SwipeAnimationsService],
    }).compile();

    controller = module.get<SwipeAnimationsController>(
      SwipeAnimationsController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
