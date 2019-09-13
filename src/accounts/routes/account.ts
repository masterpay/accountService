import httpStatus from 'http-status';

import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';
import { Account } from '../entities/account';

const list = async (request: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) => {
  const accounts = await Account.find();
  reply.code(httpStatus.OK).send(accounts);
};

const create = async (request: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) => {
  const account = new Account();
  account.userName = 'Test';
  const response = await account.save();

  reply.code(httpStatus.OK).send(response);
};

const routes = (fastify: FastifyInstance, _: any, next: any) => {
  fastify.get('/', list);
  fastify.post('/', create);
  next();
};

export { routes };
