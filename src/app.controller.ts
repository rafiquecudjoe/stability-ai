import { Controller, Get, Res } from '@nestjs/common';
import * as path from 'path'
import { Response } from 'express';


@Controller()
export class AppController {

  @Get()
  getHello(@Res() res:Response): any {
    return res.sendFile(path.join(__dirname, '../src/public/index.html'));
  }
}

