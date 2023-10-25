import { Injectable } from '@decorators/di';
import { PrismaClient } from '@prisma/client';

@Injectable()
class PinService {
  constructor(private readonly prisma: PrismaClient) {}

  async findMany() {
    return await this.prisma.pin.findMany();
  }

  async findUnique(pin_ID: string) {
    return await this.prisma.pin.findUnique({
      where: {
        name: pin_ID
      }
    })
  }
}

export default PinService;
