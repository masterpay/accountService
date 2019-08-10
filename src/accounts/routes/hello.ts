import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { IncomingMessage, ServerResponse } from 'http';
import httpStatus from 'http-status';


const hello = async (request: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) => {
  const response = "hello"
  reply
    .code(httpStatus.OK)
    .send(response)
}

const routes = (fastify: FastifyInstance, _: any, next: any) => {
  fastify.get('/', hello);
  next();
};

export {
  routes
}
