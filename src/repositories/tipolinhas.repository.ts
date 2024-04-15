import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Lb4DataSource} from '../datasources';
import {Tipolinhas, TipolinhasRelations} from '../models';

export class TipolinhasRepository extends DefaultCrudRepository<
  Tipolinhas,
  typeof Tipolinhas.prototype.id,
  TipolinhasRelations
> {
  constructor(
    @inject('datasources.lb4') dataSource: Lb4DataSource,
  ) {
    super(Tipolinhas, dataSource);
  }
}
