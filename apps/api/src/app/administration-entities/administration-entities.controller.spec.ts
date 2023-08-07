import { Test, TestingModule } from '@nestjs/testing';
import { AdministrationEntitiesController } from './administration-entities.controller';
import { AdministrationEntitiesService } from './administration-entities.service';

describe('AdministrationEntitiesController', () => {
  let controller: AdministrationEntitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdministrationEntitiesController],
      providers: [AdministrationEntitiesService],
    }).compile();

    controller = module.get<AdministrationEntitiesController>(
      AdministrationEntitiesController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
