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
import {Tipoequips} from '../models';
import {TipoequipsRepository} from '../repositories';

export class TipoequipsController {
  constructor(
    @repository(TipoequipsRepository)
    public tipoequipsRepository : TipoequipsRepository,
  ) {}

  @post('/tipoequips')
  @response(200, {
    description: 'Tipoequips model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tipoequips)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipoequips, {
            title: 'NewTipoequips',
            exclude: ['id'],
          }),
        },
      },
    })
    tipoequips: Omit<Tipoequips, 'id'>,
  ): Promise<Tipoequips> {
    return this.tipoequipsRepository.create(tipoequips);
  }

  @get('/tipoequips/count')
  @response(200, {
    description: 'Tipoequips model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tipoequips) where?: Where<Tipoequips>,
  ): Promise<Count> {
    return this.tipoequipsRepository.count(where);
  }

  @get('/tipoequips')
  @response(200, {
    description: 'Array of Tipoequips model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tipoequips, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tipoequips) filter?: Filter<Tipoequips>,
  ): Promise<Tipoequips[]> {
    return this.tipoequipsRepository.find(filter);
  }

  @patch('/tipoequips')
  @response(200, {
    description: 'Tipoequips PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipoequips, {partial: true}),
        },
      },
    })
    tipoequips: Tipoequips,
    @param.where(Tipoequips) where?: Where<Tipoequips>,
  ): Promise<Count> {
    return this.tipoequipsRepository.updateAll(tipoequips, where);
  }

  @get('/tipoequips/{id}')
  @response(200, {
    description: 'Tipoequips model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tipoequips, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Tipoequips, {exclude: 'where'}) filter?: FilterExcludingWhere<Tipoequips>
  ): Promise<Tipoequips> {
    return this.tipoequipsRepository.findById(id, filter);
  }

  @patch('/tipoequips/{id}')
  @response(204, {
    description: 'Tipoequips PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tipoequips, {partial: true}),
        },
      },
    })
    tipoequips: Tipoequips,
  ): Promise<void> {
    await this.tipoequipsRepository.updateById(id, tipoequips);
  }

  @put('/tipoequips/{id}')
  @response(204, {
    description: 'Tipoequips PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tipoequips: Tipoequips,
  ): Promise<void> {
    await this.tipoequipsRepository.replaceById(id, tipoequips);
  }

  @del('/tipoequips/{id}')
  @response(204, {
    description: 'Tipoequips DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tipoequipsRepository.deleteById(id);
  }
}
