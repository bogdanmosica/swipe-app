import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteQuotesSeedService } from './favorite-quotes-seed.service';

describe('FavoriteQuotesSeedService', () => {
  let service: FavoriteQuotesSeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteQuotesSeedService],
    }).compile();

    service = module.get<FavoriteQuotesSeedService>(FavoriteQuotesSeedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
