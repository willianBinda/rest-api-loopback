import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {UserEmpresas} from '../models';
import {UserEmpresasRepository} from '../repositories';

export class UserEmpresasController {
  constructor(
    @repository(UserEmpresasRepository)
    public userEmpresasRepository : UserEmpresasRepository,
  ) {}

  @post('/user-empresas')
  @response(200, {
    description: 'UserEmpresas model instance',
    content: {'application/json': {schema: getModelSchemaRef(UserEmpresas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserEmpresas, {
            title: 'NewUserEmpresas',
            exclude: ['id'],
          }),
        },
      },
    })
    userEmpresas: Omit<UserEmpresas, 'id'>,
  ): Promise<UserEmpresas> {
    return this.userEmpresasRepository.create(userEmpresas);
  }

  @get('/user-empresas/count')
  @response(200, {
    description: 'UserEmpresas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UserEmpresas) where?: Where<UserEmpresas>,
  ): Promise<Count> {
    return this.userEmpresasRepository.count(where);
  }

  @get('/user-empresas')
  @response(200, {
    description: 'Array of UserEmpresas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UserEmpresas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UserEmpresas) filter?: Filter<UserEmpresas>,
  ): Promise<UserEmpresas[]> {
    return this.userEmpresasRepository.find(filter);
  }

  @patch('/user-empresas')
  @response(200, {
    description: 'UserEmpresas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserEmpresas, {partial: true}),
        },
      },
    })
    userEmpresas: UserEmpresas,
    @param.where(UserEmpresas) where?: Where<UserEmpresas>,
  ): Promise<Count> {
    return this.userEmpresasRepository.updateAll(userEmpresas, where);
  }

  @get('/user-empresas/{id}')
  @response(200, {
    description: 'UserEmpresas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UserEmpresas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(UserEmpresas, {exclude: 'where'}) filter?: FilterExcludingWhere<UserEmpresas>
  ): Promise<UserEmpresas> {
    return this.userEmpresasRepository.findById(id, filter);
  }

  @patch('/user-empresas/{id}')
  @response(204, {
    description: 'UserEmpresas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserEmpresas, {partial: true}),
        },
      },
    })
    userEmpresas: UserEmpresas,
  ): Promise<void> {
    await this.userEmpresasRepository.updateById(id, userEmpresas);
  }

  @put('/user-empresas/{id}')
  @response(204, {
    description: 'UserEmpresas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() userEmpresas: UserEmpresas,
  ): Promise<void> {
    await this.userEmpresasRepository.replaceById(id, userEmpresas);
  }

  @del('/user-empresas/{id}')
  @response(204, {
    description: 'UserEmpresas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.userEmpresasRepository.deleteById(id);
  }
}
