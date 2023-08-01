import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteAuthorsController } from './favorite-authors.controller';
import { FavoriteAuthorsService } from './favorite-authors.service';

describe('FavoriteAuthorsController', () => {
  let controller: FavoriteAuthorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteAuthorsController],
      providers: [FavoriteAuthorsService],
    }).compile();

    controller = module.get<FavoriteAuthorsController>(
      FavoriteAuthorsController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
