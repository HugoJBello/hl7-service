import { HL7DecodedObservationV8I } from "../models/HL7DecodedObservationV8";
import { HL7ObservationSchemaV5, HL7ObservationSchemaV8 } from "../models/Schema";
import { parseStringSegmentUsingSchema } from "./hl7Parser";
import { Hl7Version, Hl7Segment } from "../models/Segment";
import { HL7DecodedObservationV5I } from "../models/HL7DecodedObservationV5";


export const hl7OBSXDecoder = (bsc: string, hl7version: string): HL7DecodedObservationV8I | HL7DecodedObservationV5I => {
  switch (hl7version) {
    case Hl7Version.v5:
      return hl7OBSXDecoderV5(bsc)
    case Hl7Version.v8:
      return hl7OBSXDecoderV8(bsc)
    default:
      return hl7OBSXDecoderV5(bsc)
  }
}

export const hl7OBSXDecoderV5 = (bsc: string): HL7DecodedObservationV5I => {
  const result = parseStringSegmentUsingSchema(bsc,HL7ObservationSchemaV5) as HL7DecodedObservationV8I
  result.hl7Segment = Hl7Segment.OBSERVATION
  result.hl7version = Hl7Version.v5
  return result
}

export const hl7OBSXDecoderV8 = (bsc: string): HL7DecodedObservationV8I => {
  const result = parseStringSegmentUsingSchema(bsc,HL7ObservationSchemaV8) as HL7DecodedObservationV8I
  result.hl7Segment = Hl7Segment.OBSERVATION
  result.hl7version = Hl7Version.v8
  return result
}



