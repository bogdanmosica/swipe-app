import { Test, TestingModule } from '@nestjs/testing';
import { ColourPalettesController } from './colour-palettes.controller';
import { ColourPalettesService } from './colour-palettes.service';

describe('ColourPalettesController', () => {
  let controller: ColourPalettesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColourPalettesController],
      providers: [ColourPalettesService],
    }).compile();

    controller = module.get<ColourPalettesController>(ColourPalettesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
