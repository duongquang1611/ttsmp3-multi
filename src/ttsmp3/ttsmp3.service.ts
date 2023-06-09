import { Injectable } from '@nestjs/common';
import {
  CreateBySplitTtsmp3Dto,
  CreateTtsmp3Dto,
  ResCreateMp3,
} from './dto/create-ttsmp3.dto';
import { UpdateTtsmp3Dto } from './dto/update-ttsmp3.dto';
import axios from 'axios';
import { LangType } from 'src/types/enums';
import { downloadFile, randomElement } from 'src/helpes';

@Injectable()
export class Ttsmp3Service {
  async create(createTtsmp3Dto: CreateTtsmp3Dto) {
    const { msgs = [], lang } = createTtsmp3Dto;

    const res = await Promise.all(
      msgs.map(async (msg: string) => {
        const msgTrimmed = msg.trim();
        const data = new FormData();
        const randomLang =
          lang || randomElement([LangType.Ivy, LangType.Justin]);
        data.append('msg', msgTrimmed);
        data.append('lang', randomLang);
        data.append('source', 'ttsmp3');

        const resCreateMp3: {
          data: ResCreateMp3;
        } = await axios.post('https://ttsmp3.com/makemp3_new.php', data);
        await downloadFile(
          resCreateMp3.data.URL,
          `output_tts/${msgTrimmed}.mp3`,
        );

        return 'success';
      }),
    );

    return 'success hi hi';
  }

  async createBySplit(createTtsmp3Dto: CreateBySplitTtsmp3Dto) {
    const { msgs = '', lang } = createTtsmp3Dto;

    const res = await this.create({ msgs: msgs.split(','), lang });

    return 'success hi hi';
  }

  findAll() {
    return `This action returns all ttsmp3`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ttsmp3`;
  }

  update(id: number, updateTtsmp3Dto: UpdateTtsmp3Dto) {
    return `This action updates a #${id} ttsmp3`;
  }

  remove(id: number) {
    return `This action removes a #${id} ttsmp3`;
  }
}
