import { Injectable } from '@decorators/di';
import {
  Body,
  Controller,
  Delete,
  Get,
  Params,
  Post,
  Response,
} from '@decorators/express';
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

  @Get('/:id')
  async getOne(
    @Response() response: ExpressResponse,
    @Params('id') id: string
  ) {
    const result: PinDto | null = await this.service.findUnique(Number(id));

    const dto: PinResponseDto = result
      ? ({ status: 'Success', pin: result } as PinResponseDto)
      : ({ status: 'Error ' } as PinResponseDto);

    return result
      ? response.status(200).send(dto)
      : response.status(404).send(dto);
  }

  @Post('/')
  async create(
    @Response() response: ExpressResponse,
    @Body('pin') pin: PinDto
  ) {
    const result: PinDto | null = await this.service.create(pin);

    const dto: PinResponseDto = result
      ? ({ status: 'Success', pin: result } as PinResponseDto)
      : ({ status: 'Error' } as PinResponseDto);

    return result
      ? response.status(200).send(dto)
      : response.status(500).send(dto);
  }

  @Delete('/:id')
  async delete(
    @Response() response: ExpressResponse,
    @Params('id') id: string
  ) {
    const result: PinDto = await this.service.remove(Number(id));

    const dto: PinResponseDto = result
      ? ({ status: 'Success', pin: result } as PinResponseDto)
      : ({ status: 'Error' } as PinResponseDto);

    return result
      ? response.status(200).send(dto)
      : response.status(404).send(dto);
  }
}

export { PinController };
