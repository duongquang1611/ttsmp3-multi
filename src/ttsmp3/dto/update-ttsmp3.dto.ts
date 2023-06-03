import { PartialType } from '@nestjs/mapped-types';
import { CreateTtsmp3Dto } from './create-ttsmp3.dto';

export class UpdateTtsmp3Dto extends PartialType(CreateTtsmp3Dto) {}
