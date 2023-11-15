import { Injectable } from '@decorators/di';
import { PrismaClient } from '@prisma/client';

@Injectable()
class PinService {
  constructor(private readonly prisma: PrismaClient) {}

  async findMany() {
    return await this.prisma.pin.findMany();
  }

  // async findUnique(pin_ID: string) {
  //   return await this.prisma.pin.findUnique({
  //     where: {
  //       name: pin_ID
  //     }
  //   })
  // }

  async remove(id: number) {
    return await this.prisma.pin.delete({
      where: {
        id: id
      }
    })
  }

    // Delete a Pin.
    // @param {PinDeleteArgs} args - Arguments to delete one Pin.
    // @example
    // // Delete one Pin
    // const Pin = await prisma.pin.delete({
    // where: {
    // // ... filter to delete one Pin
    // }
    // })
}



export default PinService;
