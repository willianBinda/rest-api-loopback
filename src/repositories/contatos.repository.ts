import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Lb4DataSource} from '../datasources';
import {Contatos, ContatosRelations} from '../models';

export class ContatosRepository extends DefaultCrudRepository<
  Contatos,
  typeof Contatos.prototype.id,
  ContatosRelations
> {
  constructor(
    @inject('datasources.lb4') dataSource: Lb4DataSource,
  ) {
    super(Contatos, dataSource);
  }
}
