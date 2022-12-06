import { Module } from '@nestjs/common';
import { ConvertImageService } from './convert-image.service';
import { ConvertImageController } from './convert-image.controller';


@Module({
  controllers: [ConvertImageController],
  providers: [ConvertImageService,],
})
export class ConvertImageModule { }
