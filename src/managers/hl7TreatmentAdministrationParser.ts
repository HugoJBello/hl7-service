import { HL7TreatmentAdministrationSchemaV5 } from "../models/Schema";
import { parseStringSegmentUsingSchema } from "./hl7Parser";
import { Hl7Version, Hl7Segment } from "../models/Segment";
import { HL7DecodedTreatmentAdministrationV5I } from "../models/HL7TreatmentAdministrationV5";


export const hl7RXADecoder = (bsc: string, hl7version: string): HL7DecodedTreatmentAdministrationV5I => {
  switch (hl7version) {
    case Hl7Version.v5:
      return hl7RXADecoderV5(bsc);
    default:
      return hl7RXADecoderV5(bsc);
  }
};

export const hl7RXADecoderV5 = (bsc: string): HL7DecodedTreatmentAdministrationV5I => {

  const result = parseStringSegmentUsingSchema(bsc, HL7TreatmentAdministrationSchemaV5.fields) as HL7DecodedTreatmentAdministrationV5I;
  result.hl7Segment = Hl7Segment.TREATMENT_ADMINISTRATION;
  result.hl7version = Hl7Version.v5;
  return result;
};
