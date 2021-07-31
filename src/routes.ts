import { server } from './main';
import { Prisma, User } from '@prisma/client';
import type { FastifyPluginAsync } from 'fastify';

type UserIdParam = Pick<User, 'id'>;

export const routes: FastifyPluginAsync = async (): Promise<void> => {
  server.get('/', async () => {
    return { hello: 'world' };
  });

  server.get('/test', async (request) => {
    return { hello: `${request.url} page!!` };
  });

  server.get('/user', async (_request, reply) => {
    const user = await server.prisma.user.findMany();

    reply.send(user);
  });

  server.get<{
    Params: UserIdParam;
  }>('/user/:id', async (request, reply) => {
    const { id } = request.params;
    const where: Prisma.UserWhereUniqueInput = { id: Number(id) };
    const user = await server.prisma.user.findUnique({
      where,
    });

    reply.send(user);
  });

  server.post<{
    Body: Prisma.UserCreateInput;
  }>('/user', async (request, reply) => {
    const user = await server.prisma.user.create({
      data: request.body,
    });

    reply.send(user);
  });

  server.put<{
    Params: UserIdParam;
    Body: Pick<Prisma.UserUpdateInput, 'name'>;
  }>('/user/:id', async (request, reply) => {
    const { id } = request.params;
    const where: Prisma.UserWhereUniqueInput = { id: Number(id) };
    const { name }: Prisma.UserUpdateInput = request.body;
    const user = await server.prisma.user.update({
      where,
      data: { name },
    });

    reply.send(user);
  });

  server.delete<{
    Params: UserIdParam;
  }>('/user/:id', async (request, reply) => {
    const { id } = request.params;
    const where: Prisma.UserWhereUniqueInput = { id: Number(id) };
    const user = await server.prisma.user.delete({
      where,
    });

    reply.send(user);
  });
};
