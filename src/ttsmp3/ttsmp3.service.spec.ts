import { Test, TestingModule } from '@nestjs/testing';
import { Ttsmp3Service } from './ttsmp3.service';

describe('Ttsmp3Service', () => {
  let service: Ttsmp3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Ttsmp3Service],
    }).compile();

    service = module.get<Ttsmp3Service>(Ttsmp3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
