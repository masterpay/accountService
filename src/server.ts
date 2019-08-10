import { app } from './app';



interface Config {
  port: number;
}

const start_server = async ({port}: Config) => {
  await app.listen(port, '0.0.0.0');
  console.log(`HTTP server listening on port ${port}`);
};

export {
  start_server,
}
