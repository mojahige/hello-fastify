import 'make-promises-safe';
import fastify from 'fastify';
import { routes } from './routes';
import prismaPlugin from './plugins/prisma';

export const server = fastify({
  logger: {
    prettyPrint: true,
  },
});

server.register(prismaPlugin);
server.register(routes);

const start = async () => {
  try {
    await server.listen(3000);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
