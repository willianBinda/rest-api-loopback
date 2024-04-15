import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'lb4',
  connector: 'mongodb',
  url: '',
  host: 'localhost',
  port: 27017,
  user: 'root',
  password: '123123',
  database: 'lb4',
  authSource: 'admin',
  useNewUrlParser: true,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Lb4DataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'lb4';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.lb4', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
