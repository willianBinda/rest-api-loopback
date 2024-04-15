import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mongodb: {collection: 'user_empresas'},
  },
})
export class UserEmpresas extends Entity {
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
    required: true,
    mongodb: {
      fieldName: 'empresa_id',
      dataType: 'ObjectId',
    },
  })
  empresaId: string;

  @property({
    type: 'boolean',
    required: true,
  })
  habilitado: boolean;

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

  constructor(data?: Partial<UserEmpresas>) {
    super(data);
  }
}

export interface UserEmpresasRelations {
  // describe navigational properties here
}

export type UserEmpresasWithRelations = UserEmpresas & UserEmpresasRelations;
