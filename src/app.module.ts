import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';

import { ConvertImageModule } from './apis/convert-image/convert-image.module';

@Module({
  imports: [ScheduleModule.forRoot(), ConfigModule.forRoot(), ConvertImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
