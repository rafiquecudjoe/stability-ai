import { Controller, Post, Body, Res } from '@nestjs/common';

import { Response } from 'express';
import { ResponseWithData, } from '../../common/entities/response.entity';
import { ConvertImageService } from './convert-image.service';
import { ConvertTextToImageDto } from './dto/convert-image..dto';


@Controller('/api/v1')
export class ConvertImageController {
  constructor(private readonly convertImageService: ConvertImageService) { }

  @Post('/text-to-image')

  async create(@Body() params: ConvertTextToImageDto, @Res() res: Response) {
    const response: ResponseWithData = await this.convertImageService.convert(params);

    if (response.data)
      return res.status(response.status).send(response.data);

    return res.status(response.status).json({
      message: response.message,
    });
  }
}
