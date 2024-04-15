import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Lb4DataSource} from '../datasources';
import {Grupos, GruposRelations} from '../models';

export class GruposRepository extends DefaultCrudRepository<
  Grupos,
  typeof Grupos.prototype.id,
  GruposRelations
> {
  constructor(
    @inject('datasources.lb4') dataSource: Lb4DataSource,
  ) {
    super(Grupos, dataSource);
  }
}
