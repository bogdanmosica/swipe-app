import { Injectable } from '@nestjs/common';
import { CreateColourPaletteDto } from './dto/create-colour-palette.dto';
import { UpdateColourPaletteDto } from './dto/update-colour-palette.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ColourPalette } from './entities/colour-palette.entity';
import {
  EntityCondition,
  IPaginationOptions,
  NullableType,
} from '@swipe-app/swipe-utils';

@Injectable()
export class ColourPalettesService {
  constructor(
    @InjectRepository(ColourPalette)
    private repository: Repository<ColourPalette>
  ) {}

  create(createColourPaletteDto: CreateColourPaletteDto) {
    return this.repository.save(this.repository.create(createColourPaletteDto));
  }

  findManyWithPagination(
    paginationOptions: IPaginationOptions
  ): Promise<ColourPalette[]> {
    return this.repository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(
    fields: EntityCondition<ColourPalette>
  ): Promise<NullableType<ColourPalette>> {
    return this.repository.findOne({
      where: fields,
    });
  }

  findOneByName(name: string) {
    return this.repository.findOneBy({ name });
  }

  update(id: number, updateColourPaletteDto: UpdateColourPaletteDto) {
    return this.repository.save(
      this.repository.create({
        id,
        ...updateColourPaletteDto,
      })
    );
  }

  async softDelete(id: ColourPalette['id']): Promise<void> {
    await this.repository.softDelete(id);
  }

  remove(id: ColourPalette) {
    return this.repository.remove(id);
  }
}
