import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { AbstractCompositionsService } from './abstract-compositions.service';
import { CreateAbstractCompositionDto } from './dto/create-abstract-composition.dto';
import { UpdateAbstractCompositionDto } from './dto/update-abstract-composition.dto';
import { ApiCookieAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Abstract Compositions')
@Controller({
  path: 'abstract-compositions',
  version: '1',
})
@UseInterceptors(ClassSerializerInterceptor)
export class AbstractCompositionsController {
  constructor(
    private readonly abstractCompositionsService: AbstractCompositionsService
  ) {}

  @ApiCookieAuth('token')
  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createAbstractCompositionDto: CreateAbstractCompositionDto) {
    return this.abstractCompositionsService.create(
      createAbstractCompositionDto
    );
  }

  @ApiCookieAuth('token')
  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Request() request) {
    return this.abstractCompositionsService.findAllWhere(request.user);
  }

  @Get('composition-templates')
  findCompositionTemplates() {
    return this.abstractCompositionsService.findCompositionTemplates();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.abstractCompositionsService.findOne({ id: +id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAbstractCompositionDto: UpdateAbstractCompositionDto
  ) {
    return this.abstractCompositionsService.update(
      +id,
      updateAbstractCompositionDto
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.abstractCompositionsService.remove(+id);
  }
}
