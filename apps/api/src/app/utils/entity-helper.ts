import { ApiProperty } from '@nestjs/swagger';
import { instanceToPlain } from 'class-transformer';
import { AfterLoad, BaseEntity } from 'typeorm';

export class EntityHelper extends BaseEntity {
  __entity?: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @AfterLoad()
  setEntityName() {
    this.__entity = this.constructor.name;
  }

  toJSON() {
    return instanceToPlain(this);
  }
}
