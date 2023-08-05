import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ColourPalettesSeedService } from './colour-palettes-seed.service';
import { ColourPalette } from '../../../colour-palettes/entities/colour-palette.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ColourPalette])],
  providers: [ColourPalettesSeedService],
  exports: [ColourPalettesSeedService],
})
export class ColourPalettesSeedModule {}
