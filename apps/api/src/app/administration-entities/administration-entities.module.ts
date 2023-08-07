import { Module } from '@nestjs/common';
import { AdministrationEntitiesService } from './administration-entities.service';
import { AdministrationEntitiesController } from './administration-entities.controller';

@Module({
  controllers: [AdministrationEntitiesController],
  providers: [AdministrationEntitiesService],
})
export class AdministrationEntitiesModule {}
