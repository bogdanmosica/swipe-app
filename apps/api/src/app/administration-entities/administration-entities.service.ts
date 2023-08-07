import { Injectable } from '@nestjs/common';
import { CreateAdministrationEntityDto } from './dto/create-administration-entity.dto';
import { UpdateAdministrationEntityDto } from './dto/update-administration-entity.dto';

@Injectable()
export class AdministrationEntitiesService {
  create(createAdministrationEntityDto: CreateAdministrationEntityDto) {
    return 'This action adds a new administrationEntity';
  }

  findAll() {
    return `This action returns all administrationEntities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} administrationEntity`;
  }

  update(
    id: number,
    updateAdministrationEntityDto: UpdateAdministrationEntityDto
  ) {
    return `This action updates a #${id} administrationEntity`;
  }

  remove(id: number) {
    return `This action removes a #${id} administrationEntity`;
  }
}
