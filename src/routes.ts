import type { FastifyPluginAsync } from 'fastify';
import { server } from './main';

export const routes: FastifyPluginAsync = async (): Promise<void> => {
  server.get('/', async () => {
    return { hello: 'world' };
  });

  server.get('/test', async (request) => {
    return { hello: `${request.url} page!!` };
  });
};
