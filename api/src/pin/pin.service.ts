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

  async create(pin: PinDto) {
    return await this.prisma.pin.create({
      data: {
        name: pin.name,
        description: String(pin.description),
        coordinateX: pin.coordinateX,
        coordinateY: pin.coordinateY,
        isValid: pin.isValid,
        createdAt: pin.createdAt,
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
