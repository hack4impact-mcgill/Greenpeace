import { Injectable } from '@decorators/di';
import { PrismaClient } from '@prisma/client';
import { PinDto } from './pin.dto';

@Injectable()
class PinService {
  constructor(private readonly prisma: PrismaClient) {}

  async findMany() {
    return await this.prisma.pin.findMany();
  }

  async findUnique(id: number) {
    return await this.prisma.pin.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, pin: Partial<PinDto>) {
    return await this.prisma.pin.update({
      where: {
        id: id,
      },
      data: {
        ...pin,
      },
    });
  }
}

export default PinService;
