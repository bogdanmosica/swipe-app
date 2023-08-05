import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteQuotesService } from './favorite-quotes.service';

describe('FavoriteQuotesService', () => {
  let service: FavoriteQuotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteQuotesService],
    }).compile();

    service = module.get<FavoriteQuotesService>(FavoriteQuotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
