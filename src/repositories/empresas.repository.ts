import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Lb4DataSource} from '../datasources';
import {Empresas, EmpresasRelations} from '../models';

export class EmpresasRepository extends DefaultCrudRepository<
  Empresas,
  typeof Empresas.prototype.id,
  EmpresasRelations
> {
  constructor(
    @inject('datasources.lb4') dataSource: Lb4DataSource,
  ) {
    super(Empresas, dataSource);
  }
}
