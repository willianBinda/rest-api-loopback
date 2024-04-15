import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mongodb: {collection: 'topicos'},
  },
})
export class Topicos extends Entity {
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
    mongodb: {
      fieldName: 'tipoequip_id',
      dataType: 'ObjectId',
    },
  })
  tipoequipId: string;

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

  constructor(data?: Partial<Topicos>) {
    super(data);
  }
}

export interface TopicosRelations {
  // describe navigational properties here
}

export type TopicosWithRelations = Topicos & TopicosRelations;
