import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mongodb: {collection: 'acessos'}, // custom names
  },
})
export class Acessos extends Entity {
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
  nivel: string;

  @property({
    type: 'string',
    required: true,
  })
  descricao: string;

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

  constructor(data?: Partial<Acessos>) {
    super(data);
  }
}

export interface AcessosRelations {
  // describe navigational properties here
}

export type AcessosWithRelations = Acessos & AcessosRelations;
