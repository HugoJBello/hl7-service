import { HL7DecodedObservationI } from "../models/HL7DecodedObservation";
import { HL7ObservationSchema } from "../models/Schema";
import { parseItemUsingSchema } from "./hl7Parser";


export const hl7OBSXDecoder = (bsc: string): HL7DecodedObservationI => {
  return {} as HL7DecodedObservationI

  return parseItemUsingSchema(bsc,HL7ObservationSchema) as HL7DecodedObservationI
}