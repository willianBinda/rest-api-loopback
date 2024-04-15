import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mongodb: {collection: 'contatos'}, // custom names
  },
})
export class Contatos extends Entity {
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
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  telefone: string;

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

  constructor(data?: Partial<Contatos>) {
    super(data);
  }
}

export interface ContatosRelations {
  // describe navigational properties here
}

export type ContatosWithRelations = Contatos & ContatosRelations;
