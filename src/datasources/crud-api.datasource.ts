import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'crudAPI',
  connector: 'rest',
  baseURL: 'http://localhost:3000/',
  crud: true,
  options: {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Cookie: 'userId=1',
    },
  },
  operations: [
    {
      template: {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: '{token}',
        },
        url: 'http://localhost:3000/users',
      },
      functions: {
        getAllUsers: ['token'],
      },
    },
  ],
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CrudApiDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'crudAPI';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.crudAPI', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
