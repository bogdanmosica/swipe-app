import { Test, TestingModule } from '@nestjs/testing';
import { SwipeTextStylesController } from './swipe-text-styles.controller';
import { SwipeTextStylesService } from './swipe-text-styles.service';

describe('SwipeTextStylesController', () => {
  let controller: SwipeTextStylesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SwipeTextStylesController],
      providers: [SwipeTextStylesService],
    }).compile();

    controller = module.get<SwipeTextStylesController>(
      SwipeTextStylesController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
