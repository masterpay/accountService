import { createDbConnection } from './database';
import { start_server } from './server';

const HTTP_PORT = parseInt(process.env.HTTP_PORT || '3000', 10);

(async () => {
  await createDbConnection();
  start_server({ port: HTTP_PORT });
})();
