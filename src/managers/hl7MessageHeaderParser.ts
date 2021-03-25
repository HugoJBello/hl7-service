import { HL7MessageHeaderSchemaV5 } from "../models/Schema";
import { parseStringSegmentUsingSchema } from "./hl7Parser";
import { Hl7Version, Hl7Segment } from "../models/Segment";
import { HL7DecodedMessageHeaderV5I } from "../models/HL7DecodedMessageHeaderV5";


export const hl7MSHDecoder = (bsc: string, hl7version: string): HL7DecodedMessageHeaderV5I => {
  switch (hl7version) {
    case Hl7Version.v5:
      return hl7MSHDecoderV5(bsc);
    default:
      return hl7MSHDecoderV5(bsc);
  }
};

export const hl7MSHDecoderV5 = (bsc: string): HL7DecodedMessageHeaderV5I => {

  const result = parseStringSegmentUsingSchema(bsc, HL7MessageHeaderSchemaV5.fields) as HL7DecodedMessageHeaderV5I;
  result.hl7Segment = Hl7Segment.MESSAGE_HEADER;
  result.hl7version = Hl7Version.v5;
  return result;
};
