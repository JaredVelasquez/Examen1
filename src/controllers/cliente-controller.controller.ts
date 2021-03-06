import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {Cliente} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteControllerController {
  constructor(
    @repository(ClienteRepository)
    public clienteRepository: ClienteRepository,
  ) { }

  @post('/clientes', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(Cliente)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {
            title: 'NewCliente',

          }),
        },
      },
    })
    cliente: Cliente,
  ): Promise<Cliente> {
    return this.clienteRepository.create(cliente);
  }

  @get('/clientes/count', {
    responses: {
      '200': {
        description: 'Cliente model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Cliente) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.clienteRepository.count(where);
  }

  @get('/clientes', {
    responses: {
      '200': {
        description: 'Array of Cliente model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Cliente, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Cliente) filter?: Filter<Cliente>,
  ): Promise<Cliente[]> {
    return this.clienteRepository.find(filter);
  }

  @patch('/clientes', {
    responses: {
      '200': {
        description: 'Cliente PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {partial: true}),
        },
      },
    })
    cliente: Cliente,
    @param.where(Cliente) where?: Where<Cliente>,
  ): Promise<Count> {
    return this.clienteRepository.updateAll(cliente, where);
  }

  @get('/clientes/{id}', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Cliente, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Cliente, {exclude: 'where'}) filter?: FilterExcludingWhere<Cliente>
  ): Promise<Cliente> {
    return this.clienteRepository.findById(id, filter);
  }

  @patch('/clientes/{id}', {
    responses: {
      '204': {
        description: 'Cliente PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cliente, {partial: true}),
        },
      },
    })
    cliente: Cliente,
  ): Promise<void> {
    await this.clienteRepository.updateById(id, cliente);
  }

  @put('/clientes/{id}', {
    responses: {
      '204': {
        description: 'Cliente PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cliente: Cliente,
  ): Promise<void> {
    await this.clienteRepository.replaceById(id, cliente);
  }

  @del('/clientes/{id}', {
    responses: {
      '204': {
        description: 'Cliente DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.clienteRepository.deleteById(id);
  }
  @get('/clientes/vista1')
  async vista1(): Promise<any> {
    let datos: any[] = await this.getView();
    return datos;
  }

  async getView() {
    return await this.clienteRepository.dataSource.execute(
      `SELECT *
      FROM dbo.VistaCategoriaProductos`,
    );
  }
  @get('/clientes/vista2')
  async vista2(): Promise<any> {
    let datos: any[] = await this.getView2();
    return datos;
  }

  async getView2() {
    return await this.clienteRepository.dataSource.execute(
      `SELECT *
      FROM dbo.VistaClientesPagos`,
    );
  }
}
