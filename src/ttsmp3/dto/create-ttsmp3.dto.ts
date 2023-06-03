import { LangType } from 'src/types/enums';

export class CreateTtsmp3Dto {
  msgs: string[];
  lang?: string;
}
export class CreateBySplitTtsmp3Dto {
  msgs: string;
  lang?: string;
}

export class ResCreateMp3 {
  Error: number;
  Speaker: LangType;
  Cached: number;
  Text: string;
  tasktype: string;
  URL: string;
  MP3: string;
}
