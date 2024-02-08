import { Container, attachControllers } from '@decorators/express';
import { PrismaClient } from '@prisma/client';
import bodyParser from 'body-parser';
import express, { Router, json, urlencoded } from 'express';
import { PinController } from 'pin/pin.controller';
import PinService from 'pin/pin.service';

async function useExpress(): Promise<void> {
  Container.provide([
    { provide: PrismaClient, useClass: PrismaClient },
    { provide: PinService, useClass: PinService },
  ]);

  const app = express();
  const router = Router();

  attachControllers(router, [PinController]);

  app.use(json(), urlencoded({ extended: false }));

  app.use('/api', router);

  app.listen(Number(process.env.PORT) || 3000, () => {
    console.log('Server listening on port 3000.');
  });
}

(async () => await useExpress().catch(console.error))();
