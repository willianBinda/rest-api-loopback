import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mongodb: {collection: 'linhas'},
  },
})
export class Linhas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  linha: string;

  @property({
    type: 'string',
    required: true,
  })
  descricao: string;

  @property({
    type: 'string',
    required: true,
    mongodb: {
      fieldName: 'tipolinha_id',
      dataType: 'ObjectId',
    },
  })
  tipolinhaId: string;

  @property({
    type: 'string',
    required: true,
    mongodb: {
      fieldName: 'empresa_id',
      dataType: 'ObjectId',
    },
  })
  empresaId: string;

  @property({
    type: 'date',
    required: true,
    mongodb: {
      fieldName: 'updated_at',
    },
  })
  updatedAt: string;

  @property({
    type: 'date',
    required: true,
    mongodb: {
      fieldName: 'created_at',
    },
  })
  createdAt: string;

  constructor(data?: Partial<Linhas>) {
    super(data);
  }
}

export interface LinhasRelations {
  // describe navigational properties here
}

export type LinhasWithRelations = Linhas & LinhasRelations;
