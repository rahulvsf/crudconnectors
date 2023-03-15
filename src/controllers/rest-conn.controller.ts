// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get, Request, RestBindings} from '@loopback/rest';
import {CrudAccess} from '../services';

export class RestConnController {
  private readonly CURRENT_USER_TOKEN: string;

  constructor(
    @inject('services.CrudAccess')
    protected crudAccessService: CrudAccess,
    @inject(RestBindings.Http.REQUEST)
    private request: Request,
  ) {
    this.CURRENT_USER_TOKEN = request.headers.authorization as string;
  }

  @get('/all')
  async getAllUsers(): Promise<object> {
    return this.crudAccessService.getAllUsers(this.CURRENT_USER_TOKEN);
  }
}
