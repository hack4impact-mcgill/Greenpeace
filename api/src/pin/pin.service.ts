import { Injectable } from '@decorators/di';
import { PrismaClient } from '@prisma/client';

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

  async remove(id: number) {
    return await this.prisma.pin.delete({
      where: {
        id: id,
      },
    });
  }
}

export default PinService;
