import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Ttsmp3Service } from './ttsmp3.service';
import {
  CreateBySplitTtsmp3Dto,
  CreateTtsmp3Dto,
} from './dto/create-ttsmp3.dto';
import { UpdateTtsmp3Dto } from './dto/update-ttsmp3.dto';

@Controller('ttsmp3')
export class Ttsmp3Controller {
  constructor(private readonly ttsmp3Service: Ttsmp3Service) {}

  @Post()
  create(@Body() createTtsmp3Dto: CreateTtsmp3Dto) {
    return this.ttsmp3Service.create(createTtsmp3Dto);
  }

  @Post('/create-by-split')
  createBySplit(@Body() createTtsmp3Dto: CreateBySplitTtsmp3Dto) {
    return this.ttsmp3Service.createBySplit(createTtsmp3Dto);
  }

  @Get()
  findAll() {
    return this.ttsmp3Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ttsmp3Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTtsmp3Dto: UpdateTtsmp3Dto) {
    return this.ttsmp3Service.update(+id, updateTtsmp3Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ttsmp3Service.remove(+id);
  }
}
