import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mongodb: {collection: 'tipolinhas'},
  },
})
export class Tipolinhas extends Entity {
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
  prodanimal: string;

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

  constructor(data?: Partial<Tipolinhas>) {
    super(data);
  }
}

export interface TipolinhasRelations {
  // describe navigational properties here
}

export type TipolinhasWithRelations = Tipolinhas & TipolinhasRelations;
