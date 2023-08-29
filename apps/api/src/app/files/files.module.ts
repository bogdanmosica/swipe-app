import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { FilesService } from './files.service';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  controllers: [FilesController],
  providers: [ConfigModule, ConfigService, FilesService],
})
export class FilesModule {}
