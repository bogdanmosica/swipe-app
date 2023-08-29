import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { EntityCondition, NullableType } from '../utils/types';
import { IPaginationOptions } from '../utils/interfaces/pagination-options.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>
  ) {}
  create(createProfileDto: CreateUserDto): Promise<User> {
    return this.repository.save(this.repository.create(createProfileDto));
  }

  findOne(fields: EntityCondition<User>): Promise<NullableType<User>> {
    return this.repository.findOne({
      where: fields,
    });
  }

  findManyWithPagination(
    paginationOptions: IPaginationOptions
  ): Promise<User[]> {
    return this.repository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  update(id: User['id'], payload: DeepPartial<User>): Promise<User> {
    return this.repository.save(
      this.repository.create({
        id,
        ...payload,
      })
    );
  }

  async softDelete(id: User['id']): Promise<void> {
    await this.repository.softDelete(id);
  }
}
