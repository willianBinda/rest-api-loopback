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
import {Medidas} from '../models';
import {MedidasRepository} from '../repositories';

export class MedidasController {
  constructor(
    @repository(MedidasRepository)
    public medidasRepository : MedidasRepository,
  ) {}

  @post('/medidas')
  @response(200, {
    description: 'Medidas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Medidas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medidas, {
            title: 'NewMedidas',
            exclude: ['id'],
          }),
        },
      },
    })
    medidas: Omit<Medidas, 'id'>,
  ): Promise<Medidas> {
    return this.medidasRepository.create(medidas);
  }

  @get('/medidas/count')
  @response(200, {
    description: 'Medidas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Medidas) where?: Where<Medidas>,
  ): Promise<Count> {
    return this.medidasRepository.count(where);
  }

  @get('/medidas')
  @response(200, {
    description: 'Array of Medidas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Medidas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Medidas) filter?: Filter<Medidas>,
  ): Promise<Medidas[]> {
    return this.medidasRepository.find(filter);
  }

  @patch('/medidas')
  @response(200, {
    description: 'Medidas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medidas, {partial: true}),
        },
      },
    })
    medidas: Medidas,
    @param.where(Medidas) where?: Where<Medidas>,
  ): Promise<Count> {
    return this.medidasRepository.updateAll(medidas, where);
  }

  @get('/medidas/{id}')
  @response(200, {
    description: 'Medidas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Medidas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Medidas, {exclude: 'where'}) filter?: FilterExcludingWhere<Medidas>
  ): Promise<Medidas> {
    return this.medidasRepository.findById(id, filter);
  }

  @patch('/medidas/{id}')
  @response(204, {
    description: 'Medidas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Medidas, {partial: true}),
        },
      },
    })
    medidas: Medidas,
  ): Promise<void> {
    await this.medidasRepository.updateById(id, medidas);
  }

  @put('/medidas/{id}')
  @response(204, {
    description: 'Medidas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() medidas: Medidas,
  ): Promise<void> {
    await this.medidasRepository.replaceById(id, medidas);
  }

  @del('/medidas/{id}')
  @response(204, {
    description: 'Medidas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.medidasRepository.deleteById(id);
  }
}
