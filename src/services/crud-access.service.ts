import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {CrudApiDataSource} from '../datasources';

export interface CrudAccess {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  getAllUsers(): Promise<object>;
}

export class CrudAccessProvider implements Provider<CrudAccess> {
  constructor(
    // crudAPI must match the name property in the datasource json file
    @inject('datasources.crudAPI')
    protected dataSource: CrudApiDataSource = new CrudApiDataSource(),
  ) {}

  value(): Promise<CrudAccess> {
    return getService(this.dataSource);
  }
}
