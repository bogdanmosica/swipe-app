import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { FavoriteAuthor } from './entities/favorite-author.entity';

import { CreateFavoriteAuthorDto } from './dto/create-favorite-author.dto';
import { UpdateFavoriteAuthorDto } from './dto/update-favorite-author.dto';
import { IPaginationOptions } from '../../utils/interfaces/pagination-options.interface';
import { EntityCondition } from '../../utils/types/entity-condition.type';
import { NullableType } from '../../utils/types/nullable.type';

@Injectable()
export class FavoriteAuthorsService {
  constructor(
    @InjectRepository(FavoriteAuthor)
    private repository: Repository<FavoriteAuthor>
  ) {}

  create(createFavoriteAuthorDto: CreateFavoriteAuthorDto) {
    return this.repository.save(
      this.repository.create(createFavoriteAuthorDto)
    );
  }

  findManyWithPagination(
    paginationOptions: IPaginationOptions
  ): Promise<FavoriteAuthor[]> {
    return this.repository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(
    fields: EntityCondition<FavoriteAuthor>
  ): Promise<NullableType<FavoriteAuthor>> {
    return this.repository.findOne({
      where: fields,
    });
  }

  findOneByName(name: string) {
    return this.repository.findOneBy({ name });
  }

  update(id: number, updateFavoriteAuthorDto: UpdateFavoriteAuthorDto) {
    return this.repository.save(
      this.repository.create({
        id,
        ...updateFavoriteAuthorDto,
      })
    );
  }

  async softDelete(id: FavoriteAuthor['id']): Promise<void> {
    await this.repository.softDelete(id);
  }

  remove(id: FavoriteAuthor) {
    return this.repository.remove(id);
  }
}
