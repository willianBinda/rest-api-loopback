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
import {Equipamentos} from '../models';
import {EquipamentosRepository} from '../repositories';

export class EquipamentosController {
  constructor(
    @repository(EquipamentosRepository)
    public equipamentosRepository : EquipamentosRepository,
  ) {}

  @post('/equipamentos')
  @response(200, {
    description: 'Equipamentos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Equipamentos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equipamentos, {
            title: 'NewEquipamentos',
            exclude: ['id'],
          }),
        },
      },
    })
    equipamentos: Omit<Equipamentos, 'id'>,
  ): Promise<Equipamentos> {
    return this.equipamentosRepository.create(equipamentos);
  }

  @get('/equipamentos/count')
  @response(200, {
    description: 'Equipamentos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Equipamentos) where?: Where<Equipamentos>,
  ): Promise<Count> {
    return this.equipamentosRepository.count(where);
  }

  @get('/equipamentos')
  @response(200, {
    description: 'Array of Equipamentos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Equipamentos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Equipamentos) filter?: Filter<Equipamentos>,
  ): Promise<Equipamentos[]> {
    return this.equipamentosRepository.find(filter);
  }

  @patch('/equipamentos')
  @response(200, {
    description: 'Equipamentos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equipamentos, {partial: true}),
        },
      },
    })
    equipamentos: Equipamentos,
    @param.where(Equipamentos) where?: Where<Equipamentos>,
  ): Promise<Count> {
    return this.equipamentosRepository.updateAll(equipamentos, where);
  }

  @get('/equipamentos/{id}')
  @response(200, {
    description: 'Equipamentos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Equipamentos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Equipamentos, {exclude: 'where'}) filter?: FilterExcludingWhere<Equipamentos>
  ): Promise<Equipamentos> {
    return this.equipamentosRepository.findById(id, filter);
  }

  @patch('/equipamentos/{id}')
  @response(204, {
    description: 'Equipamentos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equipamentos, {partial: true}),
        },
      },
    })
    equipamentos: Equipamentos,
  ): Promise<void> {
    await this.equipamentosRepository.updateById(id, equipamentos);
  }

  @put('/equipamentos/{id}')
  @response(204, {
    description: 'Equipamentos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() equipamentos: Equipamentos,
  ): Promise<void> {
    await this.equipamentosRepository.replaceById(id, equipamentos);
  }

  @del('/equipamentos/{id}')
  @response(204, {
    description: 'Equipamentos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.equipamentosRepository.deleteById(id);
  }
}
