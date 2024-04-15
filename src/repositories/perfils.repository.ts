import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Lb4DataSource} from '../datasources';
import {Perfils, PerfilsRelations} from '../models';

export class PerfilsRepository extends DefaultCrudRepository<
  Perfils,
  typeof Perfils.prototype.id,
  PerfilsRelations
> {
  constructor(
    @inject('datasources.lb4') dataSource: Lb4DataSource,
  ) {
    super(Perfils, dataSource);
  }
}
