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
import {Tipolinhas} from '../models';
import {TipolinhasRepository} from '../repositories';

export class TipolinhasController {
  constructor(
    @repository(TipolinhasRepository)
    public tipolinhasRepository : TipolinhasRepository,
  ) {}

  @post('/tipolinhas')
  @response(200, {
    description: 'Tipolinhas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tipolinhas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipolinhas, {
            title: 'NewTipolinhas',
            exclude: ['id'],
          }),
        },
      },
    })
    tipolinhas: Omit<Tipolinhas, 'id'>,
  ): Promise<Tipolinhas> {
    return this.tipolinhasRepository.create(tipolinhas);
  }

  @get('/tipolinhas/count')
  @response(200, {
    description: 'Tipolinhas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tipolinhas) where?: Where<Tipolinhas>,
  ): Promise<Count> {
    return this.tipolinhasRepository.count(where);
  }

  @get('/tipolinhas')
  @response(200, {
    description: 'Array of Tipolinhas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tipolinhas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tipolinhas) filter?: Filter<Tipolinhas>,
  ): Promise<Tipolinhas[]> {
    return this.tipolinhasRepository.find(filter);
  }

  @patch('/tipolinhas')
  @response(200, {
    description: 'Tipolinhas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipolinhas, {partial: true}),
        },
      },
    })
    tipolinhas: Tipolinhas,
    @param.where(Tipolinhas) where?: Where<Tipolinhas>,
  ): Promise<Count> {
    return this.tipolinhasRepository.updateAll(tipolinhas, where);
  }

  @get('/tipolinhas/{id}')
  @response(200, {
    description: 'Tipolinhas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tipolinhas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Tipolinhas, {exclude: 'where'}) filter?: FilterExcludingWhere<Tipolinhas>
  ): Promise<Tipolinhas> {
    return this.tipolinhasRepository.findById(id, filter);
  }

  @patch('/tipolinhas/{id}')
  @response(204, {
    description: 'Tipolinhas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipolinhas, {partial: true}),
        },
      },
    })
    tipolinhas: Tipolinhas,
  ): Promise<void> {
    await this.tipolinhasRepository.updateById(id, tipolinhas);
  }

  @put('/tipolinhas/{id}')
  @response(204, {
    description: 'Tipolinhas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tipolinhas: Tipolinhas,
  ): Promise<void> {
    await this.tipolinhasRepository.replaceById(id, tipolinhas);
  }

  @del('/tipolinhas/{id}')
  @response(204, {
    description: 'Tipolinhas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tipolinhasRepository.deleteById(id);
  }
}
