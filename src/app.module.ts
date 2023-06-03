import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Ttsmp3Module } from './ttsmp3/ttsmp3.module';

@Module({
  imports: [Ttsmp3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
