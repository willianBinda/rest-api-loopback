import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Lb4DataSource} from '../datasources';
import {Acessos, AcessosRelations} from '../models';

export class AcessosRepository extends DefaultCrudRepository<
  Acessos,
  typeof Acessos.prototype.id,
  AcessosRelations
> {
  constructor(@inject('datasources.lb4') dataSource: Lb4DataSource) {
    super(Acessos, dataSource);
  }
}
