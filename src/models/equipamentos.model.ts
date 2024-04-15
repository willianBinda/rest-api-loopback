import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mongodb: {collection: 'equipamentos'},
  },
})
export class Equipamentos extends Entity {
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
      fieldName: 'tipoequip_id',
      dataType: 'ObjectId',
    },
  })
  tipoequipId: string;

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
      fieldName: 'tipo_comunicacao',
    },
  })
  tipoComunicacao: string;

  @property({
    type: 'string',
    required: true,
    mongodb: {
      fieldName: 'numero_serie',
    },
  })
  numeroSerie: string;

  @property({
    type: 'string',
    required: true,
    mongodb: {
      fieldName: 'endereco_ip',
    },
  })
  enderecoIp: string;

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

  constructor(data?: Partial<Equipamentos>) {
    super(data);
  }
}

export interface EquipamentosRelations {
  // describe navigational properties here
}

export type EquipamentosWithRelations = Equipamentos & EquipamentosRelations;
