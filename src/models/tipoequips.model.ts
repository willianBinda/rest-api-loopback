import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mongodb: {collection: 'tipoequips'},
  },
})
export class Tipoequips extends Entity {
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
  tipo: string;

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

  constructor(data?: Partial<Tipoequips>) {
    super(data);
  }
}

export interface TipoequipsRelations {
  // describe navigational properties here
}

export type TipoequipsWithRelations = Tipoequips & TipoequipsRelations;
