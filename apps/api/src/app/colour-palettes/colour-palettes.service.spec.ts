import { Test, TestingModule } from '@nestjs/testing';
import { ColourPalettesService } from './colour-palettes.service';

describe('ColourPalettesService', () => {
  let service: ColourPalettesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColourPalettesService],
    }).compile();

    service = module.get<ColourPalettesService>(ColourPalettesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
