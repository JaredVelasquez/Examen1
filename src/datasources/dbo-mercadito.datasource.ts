import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dbo_Mercadito',
  connector: 'mssql',
  url: 'mssql://JaredVelasquez_SQLLogin_1:r18288l3mg@Mercaditos2.mssql.somee.com/Mercaditos2',
  host: 'Mercaditos2.mssql.somee.com',
  port: 1433,
  user: 'JaredVelasquez_SQLLogin_1',
  password: 'r18288l3mg',
  database: 'Mercaditos2'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DboMercaditoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dbo_Mercadito';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dbo_Mercadito', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
