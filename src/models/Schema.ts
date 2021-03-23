import hl7MSHSchemeV5 from './schemas/hl7MSHSchemaV2.5.json';
import hl7OBXSchemeV5 from './schemas/hl7OBXSchemaV2.5.json';
import hl7OBXSchemeV8 from './schemas/hl7OBXSchemaV2.8.json';
import hl7PIDScheme from './schemas/hl7PIDSchemaV2.5.json';

export interface SchemeField {
  sequence: number
  hl7Len: number
  hl7DataType: string
  hl7OPT: string
  hl7ComponentName: string
  hl7Repeatability: boolean
  dataType: string
  componentName: string
}

export const HL7MessageHeaderSchemaV5 = hl7MSHSchemeV5 as SchemeField[]
export const HL7ObservationSchemaV5 = hl7OBXSchemeV5 as SchemeField[]
export const HL7ObservationSchemaV8 = hl7OBXSchemeV8 as SchemeField[]
export const HL7PersonIdentificationSchema = hl7PIDScheme as SchemeField[]