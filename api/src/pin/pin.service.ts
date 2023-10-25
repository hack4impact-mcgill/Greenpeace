import { Injectable } from '@decorators/di';
import { PrismaClient } from '@prisma/client';

@Injectable()
class PinService {
  constructor(private readonly prisma: PrismaClient) {}

  async findMany() {
    return await this.prisma.pin.findMany();
  }
}

export default PinService;
