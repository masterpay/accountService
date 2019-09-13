import fastify from 'fastify';
import 'reflect-metadata';
import { routes as account_routes } from './accounts/routes/account';

const app = fastify();

app.register(account_routes, { prefix: '/accounts' });

export { app };
