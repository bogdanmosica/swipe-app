import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteQuotesController } from './favorite-quotes.controller';
import { FavoriteQuotesService } from './favorite-quotes.service';

describe('FavoriteQuotesController', () => {
  let controller: FavoriteQuotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteQuotesController],
      providers: [FavoriteQuotesService],
    }).compile();

    controller = module.get<FavoriteQuotesController>(FavoriteQuotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
