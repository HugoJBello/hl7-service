import hl7MSHScheme from './schemas/hl7MSHSchema.json';
import hl7OBXScheme from './schemas/hl7OBXSchema.json';
import hl7PIDScheme from './schemas/hl7PIDSchema.json';

export interface SchemeField {
  sequence: number
  hl7Len: number
  hl7DataType: string
  hl7OPT: string
  hl7ComponentName: string
  dataType: string
  componentName: string
}

export const HL7MessageHeaderSchema = hl7MSHScheme as SchemeField[]
export const HL7ObservationSchema = hl7OBXScheme as SchemeField[]
export const HL7PersonIdentificationSchema = hl7PIDScheme as SchemeField[]