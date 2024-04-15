import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Lb4DataSource} from '../datasources';
import {Linhas, LinhasRelations} from '../models';

export class LinhasRepository extends DefaultCrudRepository<
  Linhas,
  typeof Linhas.prototype.id,
  LinhasRelations
> {
  constructor(
    @inject('datasources.lb4') dataSource: Lb4DataSource,
  ) {
    super(Linhas, dataSource);
  }
}
