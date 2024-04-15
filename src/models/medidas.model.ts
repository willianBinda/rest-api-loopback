import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mongodb: {collection: 'medidas'},
  },
})
export class Medidas extends Entity {
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
  topico: string;

  @property({
    type: 'string',
    required: true,
  })
  valor: string;

  @property({
    type: 'date',
    required: true,
  })
  data: string;

  @property({
    type: 'string',
    required: true,
    mongodb: {
      fieldName: 'mac_address',
    },
  })
  macAddress: string;

  @property({
    type: 'string',
    required: true,
    mongodb: {
      fieldName: 'linha_id',
      dataType: 'ObjectId',
    },
  })
  linhaId: string;

  @property({
    type: 'string',
    required: true,
    mongodb: {
      fieldName: 'empresa_id',
      dataType: 'ObjectId',
    },
  })
  empresaId: string;

  constructor(data?: Partial<Medidas>) {
    super(data);
  }
}

export interface MedidasRelations {
  // describe navigational properties here
}

export type MedidasWithRelations = Medidas & MedidasRelations;
