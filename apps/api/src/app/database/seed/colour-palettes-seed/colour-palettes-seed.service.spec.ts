import { Test, TestingModule } from '@nestjs/testing';
import { ColourPalettesSeedService } from './colour-palettes-seed.service';

describe('ColourPalettesSeedService', () => {
  let service: ColourPalettesSeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColourPalettesSeedService],
    }).compile();

    service = module.get<ColourPalettesSeedService>(ColourPalettesSeedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
