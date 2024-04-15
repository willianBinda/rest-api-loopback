import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Lb4DataSource} from '../datasources';
import {Equipamentos, EquipamentosRelations} from '../models';

export class EquipamentosRepository extends DefaultCrudRepository<
  Equipamentos,
  typeof Equipamentos.prototype.id,
  EquipamentosRelations
> {
  constructor(
    @inject('datasources.lb4') dataSource: Lb4DataSource,
  ) {
    super(Equipamentos, dataSource);
  }
}
