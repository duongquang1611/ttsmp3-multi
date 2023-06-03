import { Test, TestingModule } from '@nestjs/testing';
import { Ttsmp3Controller } from './ttsmp3.controller';
import { Ttsmp3Service } from './ttsmp3.service';

describe('Ttsmp3Controller', () => {
  let controller: Ttsmp3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Ttsmp3Controller],
      providers: [Ttsmp3Service],
    }).compile();

    controller = module.get<Ttsmp3Controller>(Ttsmp3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
