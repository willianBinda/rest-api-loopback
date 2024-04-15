import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {Lb4DataSource} from '../datasources';
import {Topicos, TopicosRelations} from '../models';

export class TopicosRepository extends DefaultCrudRepository<
  Topicos,
  typeof Topicos.prototype.id,
  TopicosRelations
> {
  constructor(
    @inject('datasources.lb4') dataSource: Lb4DataSource,
  ) {
    super(Topicos, dataSource);
  }
}
