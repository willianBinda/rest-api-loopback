import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mongodb: {collection: 'empresas'}, // custom names
  },
})
export class Empresas extends Entity {
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
  endereco: string;

  @property({
    type: 'string',
    required: true,
  })
  cidade: string;

  @property({
    type: 'string',
    required: true,
  })
  uf: string;

  @property({
    type: 'string',
    required: true,
  })
  telefone: string;

  @property({
    type: 'string',
    required: true,
    mongodb: {
      fieldName: 'grupo_id',
      dataType: 'ObjectId',
    },
  })
  grupoId: string;

  @property({
    type: 'string',
    required: true,
  })
  cnpj: string;

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

  constructor(data?: Partial<Empresas>) {
    super(data);
  }
}

export interface EmpresasRelations {
  // describe navigational properties here
}

export type EmpresasWithRelations = Empresas & EmpresasRelations;
