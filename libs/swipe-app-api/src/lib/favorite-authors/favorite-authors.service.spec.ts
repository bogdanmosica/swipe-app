import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteAuthorsService } from './favorite-authors.service';

describe('FavoriteAuthorsService', () => {
  let service: FavoriteAuthorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteAuthorsService],
    }).compile();

    service = module.get<FavoriteAuthorsService>(FavoriteAuthorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
