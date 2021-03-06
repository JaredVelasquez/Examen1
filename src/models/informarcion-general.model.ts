import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'InformarcionGeneral'}}
})
export class InformarcionGeneral extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'InformarcionGeneralId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  informarcionGeneralId: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'telefono', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'direccion', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  direccion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InformarcionGeneral>) {
    super(data);
  }
}

export interface InformarcionGeneralRelations {
  // describe navigational properties here
}

export type InformarcionGeneralWithRelations = InformarcionGeneral & InformarcionGeneralRelations;
