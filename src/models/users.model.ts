import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    mongodb: {collection: 'users'},
  },
})
export class Users extends Entity {
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
  email: string;

  @property({
    type: 'string',
    required: true,
    mongodb: {
      fieldName: 'encrypted_password',
    },
  })
  encryptedPassword: string;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  fonefixo: string;

  @property({
    type: 'string',
    required: true,
  })
  smartphone: string;

  @property({
    type: 'boolean',
    required: true,
  })
  status: boolean;

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

  constructor(data?: Partial<Users>) {
    super(data);
  }
}

export interface UsersRelations {
  // describe navigational properties here
}

export type UsersWithRelations = Users & UsersRelations;
