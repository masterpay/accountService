import 'reflect-metadata';
import fastify from 'fastify';
import { routes as hello_routes } from './accounts/routes/hello';

const app = fastify();

app.register(hello_routes, { prefix: '/accounts' });

export { app };
