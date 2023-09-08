import { Test, TestingModule } from '@nestjs/testing';
import { AbstractCompositionsService } from './abstract-compositions.service';

describe('AbstractCompositionsService', () => {
  let service: AbstractCompositionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbstractCompositionsService],
    }).compile();

    service = module.get<AbstractCompositionsService>(
      AbstractCompositionsService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
