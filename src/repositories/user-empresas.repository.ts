import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Lb4DataSource} from '../datasources';
import {UserEmpresas, UserEmpresasRelations} from '../models';

export class UserEmpresasRepository extends DefaultCrudRepository<
  UserEmpresas,
  typeof UserEmpresas.prototype.id,
  UserEmpresasRelations
> {
  constructor(
    @inject('datasources.lb4') dataSource: Lb4DataSource,
  ) {
    super(UserEmpresas, dataSource);
  }
}
