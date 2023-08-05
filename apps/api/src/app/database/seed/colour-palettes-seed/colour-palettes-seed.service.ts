import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { Repository } from 'typeorm';
import { NameThatColor } from '../../../utils/name-that-color/name-that-color';
import { ColourPalette } from '../../../colour-palettes/entities/colour-palette.entity';

@Injectable()
export class ColourPalettesSeedService {
  constructor(
    @InjectRepository(ColourPalette)
    private repository: Repository<ColourPalette>
  ) {}

  async run() {
    const countColourPalette = await this.repository.count();
    if (!countColourPalette) {
      console.log(
        "Colour Palette: Colour Palette data does not exist, I'll create some data for you, from backgrounds.json!"
      );
      const file = readFileSync(
        `${__dirname}/../../../../assets/colour-palettes.json`,
        'utf8'
      );
      let colours = JSON.parse(file);
      const ntcInstance = new NameThatColor();

      colours = colours.map((c: { primary: string; secondary: string }) => {
        const name = `${ntcInstance.getName(c.primary)[1]} ${
          ntcInstance.getName(c.secondary)[1]
        }`;
        const repeatedWord = name
          .split(' ')
          .filter((s, i, sa) => sa.indexOf(s) !== sa.lastIndexOf(s));

        return {
          ...c,
          name: repeatedWord.length
            ? `${name.replaceAll(` ${repeatedWord[0]}`, '')} ${repeatedWord[0]}`
            : name,
        };
      });

      await this.repository.insert(colours);

      console.log('Colour Palette: Colour Palette data added!');
    }
  }
}
