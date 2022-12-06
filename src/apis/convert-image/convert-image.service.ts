import { HttpStatus, Injectable } from '@nestjs/common';
import { ResponseWithData } from '../../common/entities/response.entity';
import { Constants } from '../../common/enums/constants.enum';
import { Response } from '../../common/response';
import logger from '../../utils/logger';
import { ConvertTextToImageDto } from './dto/convert-image..dto';
import fetch from 'node-fetch';
import * as fs from "fs"
import { config } from 'src/config/config';
// import * as path from 'path';

@Injectable()
export class ConvertImageService {
    async convert(params: ConvertTextToImageDto): Promise<ResponseWithData> {
        try {
            // Text To Image 
            const now = new Date()
            const time = now.getTime()
            const engineId = 'stable-diffusion-512-v2-0';
            const apiHost = process.env.API_HOST ?? 'https://api.stability.ai'
            const url = `${apiHost}/v1alpha/generation/${engineId}/text-to-image`

            const outputFile = `./${time}.png`

            const apiKey = config.apiKey
            if (!apiKey) throw new Error("Missing Stability API key.");

            const response = await fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'image/png',
                        Authorization: apiKey,
                    },
                    body: JSON.stringify({
                        cfg_scale: 13,
                        clip_guidance_preset: 'FAST_BLUE',
                        height: 512,
                        width: 512,
                        samples: 1,
                        seed: 0,
                        steps: 50,
                        text_prompts: [
                            {
                                text: params.text,
                                weight: 1
                            }
                        ],
                    })
                }
            );

            if (!response.ok) {
                throw new Error(`Non-200 response: ${await response.text()}`);
            }

            try {
                const writeStream = fs.createWriteStream(outputFile);
                response.body?.pipe(writeStream);
                console.log("Done")
            } catch (e) {
                console.error(e);
            }
            return Response.withData(HttpStatus.OK, 'Image Conversion Done', {
                fileName: `${time}.png`
            })
        } catch (error) {
            logger.error(`An error occurred in Convert Image method${error}`);
            return Response.withoutData(HttpStatus.INTERNAL_SERVER_ERROR, Constants.SERVER_ERROR);
        }
    }
}
