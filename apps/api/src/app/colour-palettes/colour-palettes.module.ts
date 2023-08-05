import { Module } from '@nestjs/common';
import { ColourPalettesService } from './colour-palettes.service';
import { ColourPalettesController } from './colour-palettes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColourPalette } from './entities/colour-palette.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ColourPalette])],
  controllers: [ColourPalettesController],
  providers: [ColourPalettesService],
  exports: [ColourPalettesService],
})
export class ColourPalettesModule {}
