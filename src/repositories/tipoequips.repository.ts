import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Lb4DataSource} from '../datasources';
import {Tipoequips, TipoequipsRelations} from '../models';

export class TipoequipsRepository extends DefaultCrudRepository<
  Tipoequips,
  typeof Tipoequips.prototype.id,
  TipoequipsRelations
> {
  constructor(
    @inject('datasources.lb4') dataSource: Lb4DataSource,
  ) {
    super(Tipoequips, dataSource);
  }
}
