import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Lb4DataSource} from '../datasources';
import {Medidas, MedidasRelations} from '../models';

export class MedidasRepository extends DefaultCrudRepository<
  Medidas,
  typeof Medidas.prototype.id,
  MedidasRelations
> {
  constructor(
    @inject('datasources.lb4') dataSource: Lb4DataSource,
  ) {
    super(Medidas, dataSource);
  }
}
