import { Test, TestingModule } from '@nestjs/testing';
import { AdministrationEntitiesService } from './administration-entities.service';

describe('AdministrationEntitiesService', () => {
  let service: AdministrationEntitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdministrationEntitiesService],
    }).compile();

    service = module.get<AdministrationEntitiesService>(
      AdministrationEntitiesService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
