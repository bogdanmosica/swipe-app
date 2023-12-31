import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VideoBackgroundsService } from './video-backgrounds.service';
import { CreateVideoBackgroundDto } from './dto/create-video-background.dto';
import { UpdateVideoBackgroundDto } from './dto/update-video-background.dto';
import { VideoBackground } from './entities/video-background.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Video Backgrounds')
@Controller({
  path: 'video-backgrounds',
  version: '1',
})
export class VideoBackgroundsController {
  constructor(
    private readonly videoBackgroundsService: VideoBackgroundsService
  ) {}

  @Post()
  create(@Body() createVideoBackgroundDto: CreateVideoBackgroundDto) {
    return this.videoBackgroundsService.create(createVideoBackgroundDto);
  }

  @Get()
  findAll() {
    return this.videoBackgroundsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoBackgroundsService.findOne({ id: +id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVideoBackgroundDto: UpdateVideoBackgroundDto
  ) {
    return this.videoBackgroundsService.update(+id, updateVideoBackgroundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoBackgroundsService.remove({ id: +id } as VideoBackground);
  }
}
