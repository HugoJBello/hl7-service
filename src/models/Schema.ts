import completeSchemaIndex from "./schemaFull.json";

export interface SchemaCompleteIndex {
  [version: string] : ShemaVersionIndex
}

export interface ShemaVersionIndex {
  [sequence: string] : Schema
}

export interface SchemaField {
  sequence: number
  hl7Len: number
  hl7DataType: string
  hl7OPT: string
  hl7ComponentName: string
  hl7Repeatability: boolean
  hl7Rpt: boolean
  dataType: string
  componentName: string
}

export interface Schema {
  segmentName: string,
  segmentLongName: string,
  segmentCamelLongName: string,
  hl7Version: string,
  fields: SchemaField[]
}

export const SchemaCompleteIndex = completeSchemaIndex as unknown as SchemaCompleteIndex;
