import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mongodb: {collection: 'perfils'},
  },
})
export class Perfils extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    mongodb: {
      fieldName: 'user_id',
      dataType: 'ObjectId',
    },
  })
  userId: string;

  @property({
    type: 'string',
    required: false,
    mongodb: {
      fieldName: 'empresa_id',
      dataType: 'ObjectId',
    },
  })
  empresaId: string;

  @property({
    type: 'string',
    required: false,
    mongodb: {
      fieldName: 'equipamento_id',
      dataType: 'ObjectId',
    },
  })
  equipamentoId: string;

  @property({
    type: 'string',
    required: false,
    mongodb: {
      fieldName: 'topico_id',
      dataType: 'ObjectId',
    },
  })
  topicoId: string;

  @property({
    type: 'boolean',
    required: true,
  })
  habilitado: boolean;

  @property({
    type: 'string',
    required: false,
    mongodb: {
      fieldName: 'acesso_id',
      dataType: 'ObjectId',
    },
  })
  acessoId: string;

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

  constructor(data?: Partial<Perfils>) {
    super(data);
  }
}

export interface PerfilsRelations {
  // describe navigational properties here
}

export type PerfilsWithRelations = Perfils & PerfilsRelations;
