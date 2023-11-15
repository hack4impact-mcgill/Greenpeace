import { Injectable } from '@decorators/di';
import { Controller, Delete, Get, Response, Params } from '@decorators/express';
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
  async getByID(
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
  
  @Delete('/:id') 
    async deleteById(@Response() response: ExpressResponse, id: string) {
      const result: PinDto = await this.service.remove(Number(id));

      const dto: PinResponseDto = result
        ? ({ status: 'Success', pin: result } as PinResponseDto)
        : ({ status: 'Error'} as PinResponseDto);

        return result 
        ? response.status(200).send(dto)
        : response.status(404).send(dto);
    }
  }
}

export { PinController };
