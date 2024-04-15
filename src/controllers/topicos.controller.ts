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
import {Topicos} from '../models';
import {TopicosRepository} from '../repositories';

export class TopicosController {
  constructor(
    @repository(TopicosRepository)
    public topicosRepository : TopicosRepository,
  ) {}

  @post('/topicos')
  @response(200, {
    description: 'Topicos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Topicos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Topicos, {
            title: 'NewTopicos',
            exclude: ['id'],
          }),
        },
      },
    })
    topicos: Omit<Topicos, 'id'>,
  ): Promise<Topicos> {
    return this.topicosRepository.create(topicos);
  }

  @get('/topicos/count')
  @response(200, {
    description: 'Topicos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Topicos) where?: Where<Topicos>,
  ): Promise<Count> {
    return this.topicosRepository.count(where);
  }

  @get('/topicos')
  @response(200, {
    description: 'Array of Topicos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Topicos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Topicos) filter?: Filter<Topicos>,
  ): Promise<Topicos[]> {
    return this.topicosRepository.find(filter);
  }

  @patch('/topicos')
  @response(200, {
    description: 'Topicos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Topicos, {partial: true}),
        },
      },
    })
    topicos: Topicos,
    @param.where(Topicos) where?: Where<Topicos>,
  ): Promise<Count> {
    return this.topicosRepository.updateAll(topicos, where);
  }

  @get('/topicos/{id}')
  @response(200, {
    description: 'Topicos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Topicos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Topicos, {exclude: 'where'}) filter?: FilterExcludingWhere<Topicos>
  ): Promise<Topicos> {
    return this.topicosRepository.findById(id, filter);
  }

  @patch('/topicos/{id}')
  @response(204, {
    description: 'Topicos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Topicos, {partial: true}),
        },
      },
    })
    topicos: Topicos,
  ): Promise<void> {
    await this.topicosRepository.updateById(id, topicos);
  }

  @put('/topicos/{id}')
  @response(204, {
    description: 'Topicos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() topicos: Topicos,
  ): Promise<void> {
    await this.topicosRepository.replaceById(id, topicos);
  }

  @del('/topicos/{id}')
  @response(204, {
    description: 'Topicos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.topicosRepository.deleteById(id);
  }
}
