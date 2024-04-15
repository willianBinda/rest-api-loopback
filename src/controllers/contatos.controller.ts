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
import {Contatos} from '../models';
import {ContatosRepository} from '../repositories';

export class ContatosController {
  constructor(
    @repository(ContatosRepository)
    public contatosRepository : ContatosRepository,
  ) {}

  @post('/contatos')
  @response(200, {
    description: 'Contatos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Contatos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Contatos, {
            title: 'NewContatos',
            exclude: ['id'],
          }),
        },
      },
    })
    contatos: Omit<Contatos, 'id'>,
  ): Promise<Contatos> {
    return this.contatosRepository.create(contatos);
  }

  @get('/contatos/count')
  @response(200, {
    description: 'Contatos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Contatos) where?: Where<Contatos>,
  ): Promise<Count> {
    return this.contatosRepository.count(where);
  }

  @get('/contatos')
  @response(200, {
    description: 'Array of Contatos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Contatos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Contatos) filter?: Filter<Contatos>,
  ): Promise<Contatos[]> {
    return this.contatosRepository.find(filter);
  }

  @patch('/contatos')
  @response(200, {
    description: 'Contatos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Contatos, {partial: true}),
        },
      },
    })
    contatos: Contatos,
    @param.where(Contatos) where?: Where<Contatos>,
  ): Promise<Count> {
    return this.contatosRepository.updateAll(contatos, where);
  }

  @get('/contatos/{id}')
  @response(200, {
    description: 'Contatos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Contatos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Contatos, {exclude: 'where'}) filter?: FilterExcludingWhere<Contatos>
  ): Promise<Contatos> {
    return this.contatosRepository.findById(id, filter);
  }

  @patch('/contatos/{id}')
  @response(204, {
    description: 'Contatos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Contatos, {partial: true}),
        },
      },
    })
    contatos: Contatos,
  ): Promise<void> {
    await this.contatosRepository.updateById(id, contatos);
  }

  @put('/contatos/{id}')
  @response(204, {
    description: 'Contatos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() contatos: Contatos,
  ): Promise<void> {
    await this.contatosRepository.replaceById(id, contatos);
  }

  @del('/contatos/{id}')
  @response(204, {
    description: 'Contatos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.contatosRepository.deleteById(id);
  }
}
