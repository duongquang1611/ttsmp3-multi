import { Module } from '@nestjs/common';
import { Ttsmp3Service } from './ttsmp3.service';
import { Ttsmp3Controller } from './ttsmp3.controller';

@Module({
  controllers: [Ttsmp3Controller],
  providers: [Ttsmp3Service],
})
export class Ttsmp3Module {}
