import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateVideoBackgroundDto } from './dto/create-video-background.dto';
import { UpdateVideoBackgroundDto } from './dto/update-video-background.dto';
import { VideoBackground } from './entities/video-background.entity';
import { IPaginationOptions } from '../utils/interfaces/pagination-options.interface';
import { EntityCondition } from '../utils/types/entity-condition.type';
import { NullableType } from '../utils/types/nullable.type';

@Injectable()
export class VideoBackgroundsService {
  constructor(
    @InjectRepository(VideoBackground)
    private repository: Repository<VideoBackground>
  ) {}

  create(createVideoBackgroundDto: CreateVideoBackgroundDto) {
    return this.repository.save(
      this.repository.create(createVideoBackgroundDto)
    );
  }

  findManyWithPagination(
    paginationOptions: IPaginationOptions
  ): Promise<VideoBackground[]> {
    return this.repository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
    });
  }

  findAll() {
    return this.repository.find();
  }

  findOne(
    fields: EntityCondition<VideoBackground>
  ): Promise<NullableType<VideoBackground>> {
    return this.repository.findOne({
      where: fields,
    });
  }

  update(id: number, updateVideoBackgroundDto: UpdateVideoBackgroundDto) {
    return this.repository.save(
      this.repository.create({
        id,
        ...updateVideoBackgroundDto,
      })
    );
  }

  async softDelete(id: VideoBackground['id']): Promise<void> {
    await this.repository.softDelete(id);
  }

  remove(id: VideoBackground) {
    return this.repository.remove(id);
  }
}
