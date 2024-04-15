import {createTunnel} from 'tunnel-ssh';
import {AppApplication, ApplicationConfig} from './application';

export * from './application';

export async function main(options: ApplicationConfig = {}) {
  await createTunnel(
    {
      autoClose: true,
    },
    {
      port: 27017,
    },
    {
      host: '209.14.140.120',
      port: 10227,
      username: 'fluxodev',
      password: 'fluxo2022',
    },
    {
      dstAddr: '127.0.0.1',
      dstPort: 27017,
    },
  );
  const app = new AppApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: +(process.env.PORT ?? 3000),
      host: process.env.HOST,
      // The `gracePeriodForClose` provides a graceful close for http/https
      // servers with keep-alive clients. The default value is `Infinity`
      // (don't force-close). If you want to immediately destroy all sockets
      // upon stop, set its value to `0`.
      // See https://www.npmjs.com/package/stoppable
      gracePeriodForClose: 5000, // 5 seconds
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
    },
  };
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}