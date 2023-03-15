// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get} from '@loopback/rest';
import {CrudAccess} from '../services';

export class RestConnController {
  constructor(
    @inject('services.CrudAccess')
    protected crudAccessService: CrudAccess,
  ) {}

  @get('/all')
  async getAllUsers(): Promise<object> {
    return this.crudAccessService.getAllUsers();
  }
}
