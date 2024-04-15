import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'vm2',
  connector: 'mongodb',
  url: '',
  host: 'localhost',
  port: 27017,
  user: 'root',
  password: 'lts2023$%',
  database: 'Fluxodb_0',
  authSource: 'Fluxodb_0',
  useNewUrlParser: true,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Vm2DataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'vm2';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.vm2', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
