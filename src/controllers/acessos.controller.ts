import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Acessos} from '../models';
import {AcessosRepository} from '../repositories';

export class AcessosController {
  constructor(
    @repository(AcessosRepository)
    public acessosRepository: AcessosRepository,
  ) {}

  @post('/acessos')
  @response(200, {
    description: 'Acessos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Acessos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Acessos, {
            title: 'NewAcessos',
            exclude: ['id'],
          }),
        },
      },
    })
    acessos: Omit<Acessos, '_id'>,
  ): Promise<Acessos> {
    return this.acessosRepository.create(acessos);
  }

  @get('/acessos/count')
  @response(200, {
    description: 'Acessos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Acessos) where?: Where<Acessos>): Promise<Count> {
    return this.acessosRepository.count(where);
  }

  @get('/acessos')
  @response(200, {
    description: 'Array of Acessos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Acessos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Acessos) filter?: Filter<Acessos>,
  ): Promise<Acessos[]> {
    return this.acessosRepository.find(filter);
  }

  @patch('/acessos')
  @response(200, {
    description: 'Acessos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Acessos, {partial: true}),
        },
      },
    })
    acessos: Acessos,
    @param.where(Acessos) where?: Where<Acessos>,
  ): Promise<Count> {
    return this.acessosRepository.updateAll(acessos, where);
  }

  @get('/acessos/{id}')
  @response(200, {
    description: 'Acessos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Acessos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Acessos, {exclude: 'where'})
    filter?: FilterExcludingWhere<Acessos>,
  ): Promise<Acessos> {
    return this.acessosRepository.findById(id, filter);
  }

  @patch('/acessos/{id}')
  @response(204, {
    description: 'Acessos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Acessos, {partial: true}),
        },
      },
    })
    acessos: Acessos,
  ): Promise<void> {
    await this.acessosRepository.updateById(id, acessos);
  }

  @put('/acessos/{id}')
  @response(204, {
    description: 'Acessos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() acessos: Acessos,
  ): Promise<void> {
    await this.acessosRepository.replaceById(id, acessos);
  }

  @del('/acessos/{id}')
  @response(204, {
    description: 'Acessos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.acessosRepository.deleteById(id);
  }
}
