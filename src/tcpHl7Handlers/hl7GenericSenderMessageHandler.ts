import { SchemaCompleteIndex } from "../models/Schema";

import Segment from "../models/Hl7GeneratedModels/Segment";
import { Hl7Segment, Hl7Version } from "../models/Segment";
import { encodeSegmentUsingSchema } from "../managers/hl7Composer";

export type SegmentExtended = any & Segment;

export const composeGenericMessageHandler = (segments: SegmentExtended[]) => {
  let message = "";
  for (const segmentPart of segments) {
    const version = segmentPart.hl7Version;
    const segment = segmentPart.hl7Segment;
    const schema = SchemaCompleteIndex[version][segment];
    const encodedLine = encodeSegmentUsingSchema(segmentPart, schema);
    message = `${message + encodedLine}\n`;
  }
  return message;
};

