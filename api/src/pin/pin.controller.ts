import { Injectable } from '@decorators/di';
import { Controller, Get, Response } from '@decorators/express';
import { Response as ExpressResponse } from 'express';
import PinService from './pin.service';
import { ManyPinResponseDto, PinDto, PinResponseDto } from './pin.dto';

@Controller('/pins')
@Injectable()
class PinController {
  constructor(private readonly service: PinService) {}

  @Get('/')
  async getMany(@Response() response: ExpressResponse) {
    const result: Array<PinDto> = await this.service.findMany();

    const dto: PinResponseDto = result
      ? ({ status: 'Success', pin: result } as ManyPinResponseDto)
      : ({ status: 'Error' } as ManyPinResponseDto);

    return result
      ? response.status(200).send(dto)
      : response.status(404).send(dto);
  }
}

export { PinController };
