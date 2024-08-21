import next from 'next';
import nextBuild from 'next/dist/build';

import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

import { getPayloadClient } from './payload/getPayload';

dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

const app = express();
const PORT = process.env.PORT || 3000;

const start = async (): Promise<void> => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async newPayload => {
        newPayload.logger.info(`Payload Admin URL: ${newPayload.getAdminURL()}`);
      }
    },
    seed: process.env.PAYLOAD_PUBLIC_SEED === 'true'
  });

  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payload.logger.info(`Next.js is now building...`);
      // @ts-expect-error
      await nextBuild(path.join(__dirname, '..'));
      process.exit();
    });

    return;
  }

  const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
    port: PORT as number
  });

  const nextHandler = nextApp.getRequestHandler();

  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    payload.logger.info('Next.js started');

    app.listen(PORT, async () => {
      payload.logger.info(`Next.js App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`);
    });
  });
};

start();
