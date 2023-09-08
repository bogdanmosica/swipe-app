import { Injectable } from '@nestjs/common';
import {
  DeepPartial,
  FindManyOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateAbstractCompositionDto } from './dto/create-abstract-composition.dto';
import { AbstractComposition } from './entities/abstract-composition.entity';
import { EntityCondition, NullableType } from '../../utils/types';
import { IPaginationOptions } from '../../utils/interfaces/pagination-options.interface';
import { JwtPayloadType } from '../../auth/strategies/types/jwt-payload.type';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class AbstractCompositionsService {
  constructor(
    @InjectRepository(AbstractComposition)
    private repository: Repository<AbstractComposition>
  ) {}
  create(
    createAbstractCompositionDto: CreateAbstractCompositionDto
  ): Promise<AbstractComposition> {
    return this.repository.save(
      this.repository.create(createAbstractCompositionDto)
    );
  }

  findOne(
    fields: EntityCondition<AbstractComposition>
  ): Promise<NullableType<AbstractComposition>> {
    return this.repository.findOne({
      where: fields,
    });
  }

  findManyWithPagination(
    paginationOptions: IPaginationOptions
  ): Promise<AbstractComposition[]> {
    return this.repository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  findAll(): Promise<AbstractComposition[]> {
    return this.repository.find();
  }

  findAllWhere(
    userJwtPayload: EntityCondition<JwtPayloadType>
  ): Promise<AbstractComposition[]> {
    const { id } = userJwtPayload;
    const compositions = this.repository.find({
      where: {
        user: { id: id },
      },
    });
    return compositions;
  }

  update(
    id: AbstractComposition['id'],
    payload: DeepPartial<AbstractComposition>
  ): Promise<AbstractComposition> {
    return this.repository.save(
      this.repository.create({
        id,
        ...payload,
      })
    );
  }

  async softDelete(id: AbstractComposition['id']): Promise<void> {
    await this.repository.softDelete(id);
  }

  async remove(id: AbstractComposition['id']): Promise<void> {
    await this.repository.delete(id);
  }
}
