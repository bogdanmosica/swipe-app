import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ColourPalettesService } from './colour-palettes.service';
import { CreateColourPaletteDto } from './dto/create-colour-palette.dto';
import { UpdateColourPaletteDto } from './dto/update-colour-palette.dto';
import { ColourPalette } from './entities/colour-palette.entity';

@Controller('colour-palettes')
export class ColourPalettesController {
  constructor(private readonly colourPalettesService: ColourPalettesService) {}

  @Post()
  create(@Body() createColourPaletteDto: CreateColourPaletteDto) {
    return this.colourPalettesService.create(createColourPaletteDto);
  }

  @Get()
  findAll() {
    return this.colourPalettesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.colourPalettesService.findOne({ id: +id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateColourPaletteDto: UpdateColourPaletteDto
  ) {
    return this.colourPalettesService.update(+id, updateColourPaletteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.colourPalettesService.remove({ id: +id } as ColourPalette);
  }
}
