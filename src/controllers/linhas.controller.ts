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
import {Linhas} from '../models';
import {LinhasRepository} from '../repositories';

export class LinhasController {
  constructor(
    @repository(LinhasRepository)
    public linhasRepository : LinhasRepository,
  ) {}

  @post('/linhas')
  @response(200, {
    description: 'Linhas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Linhas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Linhas, {
            title: 'NewLinhas',
            exclude: ['id'],
          }),
        },
      },
    })
    linhas: Omit<Linhas, 'id'>,
  ): Promise<Linhas> {
    return this.linhasRepository.create(linhas);
  }

  @get('/linhas/count')
  @response(200, {
    description: 'Linhas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Linhas) where?: Where<Linhas>,
  ): Promise<Count> {
    return this.linhasRepository.count(where);
  }

  @get('/linhas')
  @response(200, {
    description: 'Array of Linhas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Linhas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Linhas) filter?: Filter<Linhas>,
  ): Promise<Linhas[]> {
    return this.linhasRepository.find(filter);
  }

  @patch('/linhas')
  @response(200, {
    description: 'Linhas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Linhas, {partial: true}),
        },
      },
    })
    linhas: Linhas,
    @param.where(Linhas) where?: Where<Linhas>,
  ): Promise<Count> {
    return this.linhasRepository.updateAll(linhas, where);
  }

  @get('/linhas/{id}')
  @response(200, {
    description: 'Linhas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Linhas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Linhas, {exclude: 'where'}) filter?: FilterExcludingWhere<Linhas>
  ): Promise<Linhas> {
    return this.linhasRepository.findById(id, filter);
  }

  @patch('/linhas/{id}')
  @response(204, {
    description: 'Linhas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Linhas, {partial: true}),
        },
      },
    })
    linhas: Linhas,
  ): Promise<void> {
    await this.linhasRepository.updateById(id, linhas);
  }

  @put('/linhas/{id}')
  @response(204, {
    description: 'Linhas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() linhas: Linhas,
  ): Promise<void> {
    await this.linhasRepository.replaceById(id, linhas);
  }

  @del('/linhas/{id}')
  @response(204, {
    description: 'Linhas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.linhasRepository.deleteById(id);
  }
}
