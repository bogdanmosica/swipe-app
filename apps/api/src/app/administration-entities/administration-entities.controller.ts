import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdministrationEntitiesService } from './administration-entities.service';
import { CreateAdministrationEntityDto } from './dto/create-administration-entity.dto';
import { UpdateAdministrationEntityDto } from './dto/update-administration-entity.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Administration Entities')
@Controller({
  path: 'administration-entities',
  version: '1',
})
export class AdministrationEntitiesController {
  constructor(
    private readonly administrationEntitiesService: AdministrationEntitiesService
  ) {}

  @Post()
  create(@Body() createAdministrationEntityDto: CreateAdministrationEntityDto) {
    return this.administrationEntitiesService.create(
      createAdministrationEntityDto
    );
  }

  @Get()
  findAll() {
    return this.administrationEntitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administrationEntitiesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdministrationEntityDto: UpdateAdministrationEntityDto
  ) {
    return this.administrationEntitiesService.update(
      +id,
      updateAdministrationEntityDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administrationEntitiesService.remove(+id);
  }
}
