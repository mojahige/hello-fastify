import 'make-promises-safe';
import fastify from 'fastify';
import { routes } from './routes';

export const server = fastify({
  logger: true,
});

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
