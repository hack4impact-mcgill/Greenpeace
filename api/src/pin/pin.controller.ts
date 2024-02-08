import { Injectable } from '@decorators/di';
import {
  Body,
  Controller,
  Delete,
  Get,
  Params,
  Post,
  Put,
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

  @Post('/:id/reaction')
  async addReaction(
    @Response() response: ExpressResponse,
    @Params('id') id: number,
    @Params('reaction') reaction: string
  ) {
    // find the pin
    const result: PinDto | null = await this.service.findUnique(Number(id));

    // if result is null
    if (result) {
      return response.status(404).send(({ status: 'Error' } as PinResponseDto));
    }
    else {
      result!!.reactions?.push(reaction)
    }
  }

  @Put('/:id')
  async update(
    @Response() response: ExpressResponse,
    @Params('id') id: number,
    @Body('pin') pin: Partial<PinDto>
  ) {
    const result: PinDto | null = await this.service.update(id, pin);

    const dto: PinResponseDto = result
      ? ({ status: 'Success', pin: result } as PinResponseDto)
      : ({ status: 'Error' } as PinResponseDto);

    return result
      ? response.status(200).send(dto)
      : response.status(404).send(dto);
  }

  @Delete('/:id')
  async delete(
    @Response() response: ExpressResponse,
    @Params('id') id: number
  ) {
    const result: PinDto = await this.service.remove(Number(id));

    const dto: PinResponseDto = result
      ? ({ status: 'Success', pin: result } as PinResponseDto)
      : ({ status: 'Error' } as PinResponseDto);

    return result
      ? response.status(200).send(dto)
      : response.status(404).send(dto);
  }

  @Delete('/:id/reaction')
  async deleteReaction(
    @Response() response: ExpressResponse,
    @Params('id') id: number,
    @Params('reaction') reaction: string
  ) {
    // find the pin
    const result: PinDto | null = await this.service.findUnique(Number(id));

    // if result is null
    if (result) {
      return response.status(404).send(({ status: 'Error' } as PinResponseDto));
    }
    else {

      // iterate through the pin's list of reactions
      for (var cur_reaction in result!!.reactions) {

        // if reaction found
        if (cur_reaction == reaction) {
          // index of reaction to remove
          var index: number = result!!.reactions.indexOf(cur_reaction)

          // remove reaction at index "index" from reactions
          result!!.reactions.splice(index, 1)
        }
      }
    }
  }
}

export { PinController };
