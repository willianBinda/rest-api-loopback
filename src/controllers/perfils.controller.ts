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
import {Perfils} from '../models';
import {PerfilsRepository} from '../repositories';

export class PerfilsController {
  constructor(
    @repository(PerfilsRepository)
    public perfilsRepository : PerfilsRepository,
  ) {}

  @post('/perfils')
  @response(200, {
    description: 'Perfils model instance',
    content: {'application/json': {schema: getModelSchemaRef(Perfils)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Perfils, {
            title: 'NewPerfils',
            exclude: ['id'],
          }),
        },
      },
    })
    perfils: Omit<Perfils, 'id'>,
  ): Promise<Perfils> {
    return this.perfilsRepository.create(perfils);
  }

  @get('/perfils/count')
  @response(200, {
    description: 'Perfils model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Perfils) where?: Where<Perfils>,
  ): Promise<Count> {
    return this.perfilsRepository.count(where);
  }

  @get('/perfils')
  @response(200, {
    description: 'Array of Perfils model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Perfils, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Perfils) filter?: Filter<Perfils>,
  ): Promise<Perfils[]> {
    return this.perfilsRepository.find(filter);
  }

  @patch('/perfils')
  @response(200, {
    description: 'Perfils PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Perfils, {partial: true}),
        },
      },
    })
    perfils: Perfils,
    @param.where(Perfils) where?: Where<Perfils>,
  ): Promise<Count> {
    return this.perfilsRepository.updateAll(perfils, where);
  }

  @get('/perfils/{id}')
  @response(200, {
    description: 'Perfils model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Perfils, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Perfils, {exclude: 'where'}) filter?: FilterExcludingWhere<Perfils>
  ): Promise<Perfils> {
    return this.perfilsRepository.findById(id, filter);
  }

  @patch('/perfils/{id}')
  @response(204, {
    description: 'Perfils PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Perfils, {partial: true}),
        },
      },
    })
    perfils: Perfils,
  ): Promise<void> {
    await this.perfilsRepository.updateById(id, perfils);
  }

  @put('/perfils/{id}')
  @response(204, {
    description: 'Perfils PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() perfils: Perfils,
  ): Promise<void> {
    await this.perfilsRepository.replaceById(id, perfils);
  }

  @del('/perfils/{id}')
  @response(204, {
    description: 'Perfils DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.perfilsRepository.deleteById(id);
  }
}
