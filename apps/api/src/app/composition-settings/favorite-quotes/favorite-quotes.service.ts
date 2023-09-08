import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateFavoriteQuoteDto } from './dto/create-favorite-quote.dto';
import { UpdateFavoriteQuoteDto } from './dto/update-favorite-quote.dto';
import { FavoriteQuote } from './entities/favorite-quote.entity';
import { FavoriteAuthor } from '../favorite-authors/entities/favorite-author.entity';
import { IPaginationOptions } from '../../utils/interfaces/pagination-options.interface';
import { EntityCondition } from '../../utils/types/entity-condition.type';
import { NullableType } from '../../utils/types/nullable.type';

@Injectable()
export class FavoriteQuotesService {
  constructor(
    @InjectRepository(FavoriteQuote)
    private repository: Repository<FavoriteQuote>
  ) {}

  create(createFavoriteQuoteDto: CreateFavoriteQuoteDto) {
    return this.repository.save(this.repository.create(createFavoriteQuoteDto));
  }

  findManyWithPagination(
    paginationOptions: IPaginationOptions
  ): Promise<FavoriteQuote[]> {
    return this.repository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(
    fields: EntityCondition<FavoriteQuote>
  ): Promise<NullableType<FavoriteQuote>> {
    return this.repository.findOne({
      where: fields,
    });
  }

  findOneByName(
    author: EntityCondition<FavoriteAuthor>
  ): Promise<NullableType<FavoriteQuote>> {
    return this.repository.findOne({
      where: author,
    });
  }

  update(id: number, updateFavoriteQuoteDto: UpdateFavoriteQuoteDto) {
    return this.repository.save(
      this.repository.create({
        id,
        ...updateFavoriteQuoteDto,
      })
    );
  }

  async softDelete(id: FavoriteQuote['id']): Promise<void> {
    await this.repository.softDelete(id);
  }

  remove(id: FavoriteQuote) {
    return this.repository.remove(id);
  }
}
