import {expect} from '@loopback/testlab';
import {CrudApiDataSource} from '../../datasources';
import {CrudAccess, CrudAccessProvider} from '../../services';

describe('crudAPI', () => {
  let service: CrudAccess;
  before(givenCrudAccessService);

  it('resolves all users', async () => {
    const x = await service.getAllUsers('someToken');
    expect(x).to.length(1);
  });

  function givenCrudAccessService() {
    const datasource = new CrudApiDataSource();
    service = new CrudAccessProvider(datasource).value();
  }
});
