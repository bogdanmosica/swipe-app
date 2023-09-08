import { Test, TestingModule } from '@nestjs/testing';
import { AbstractCompositionsController } from './abstract-compositions.controller';
import { AbstractCompositionsService } from './abstract-compositions.service';

describe('AbstractCompositionsController', () => {
  let controller: AbstractCompositionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbstractCompositionsController],
      providers: [AbstractCompositionsService],
    }).compile();

    controller = module.get<AbstractCompositionsController>(
      AbstractCompositionsController
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
