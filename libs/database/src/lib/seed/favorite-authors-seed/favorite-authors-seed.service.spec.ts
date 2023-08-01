import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteAuthorsSeedService } from './favorite-authors-seed.service';

describe('FavoriteAuthorsSeedService', () => {
  let service: FavoriteAuthorsSeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteAuthorsSeedService],
    }).compile();

    service = module.get<FavoriteAuthorsSeedService>(
      FavoriteAuthorsSeedService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
