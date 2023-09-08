import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AbstractCompositionsService } from './abstract-compositions.service';
import { AbstractCompositionsController } from './abstract-compositions.controller';
import { AbstractComposition } from './entities/abstract-composition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AbstractComposition])],
  controllers: [AbstractCompositionsController],
  providers: [AbstractCompositionsService],
  exports: [AbstractCompositionsService],
})
export class AbstractCompositionsModule {}
