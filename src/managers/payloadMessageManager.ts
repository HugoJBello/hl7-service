import { Hl7Segment } from "../models/Segment";
import {
  ADT_A31_SEGMENTS,
  ADT_A40_SEGMENTS,
  Hl7MessageType,
  OMG_019_SEGMENTS,
  ORU_R01_SEGMENTS,
} from "../models/HL7Message";

const separator = "|";
const arraySeparator = "^";

export interface MessageSegmentPart {
  hl7SegmentName: Hl7Segment
  hl7SegmentContent: string
}

const extractLine = (line: string): MessageSegmentPart => {
  if (!line.includes(separator)) {
    throw new Error(`incorrect format in line ${line}`);
  }
  const key = line.split(separator)[0] as Hl7Segment;
  const message = { hl7SegmentName: key, hl7SegmentContent: line } as MessageSegmentPart;
  return message;
};

export const separateSegmentPart = (hl7Payload: string): MessageSegmentPart[] => {
  const messageParts = [] as MessageSegmentPart[];
  if (hl7Payload.includes("\n")) {
    for (const line of hl7Payload.split("\n")) {
      const message = extractLine(line);
      messageParts.push(message);
    }
  } else {
    const message = extractLine(hl7Payload);
    messageParts.push(message);
  }
  return messageParts;
};

export const classifyMessage = (message: MessageSegmentPart[]): Hl7MessageType => {
  const segmentNames: string[] = message.map((message: MessageSegmentPart) => message.hl7SegmentName);

  const isAdtA31 = arrayContainsArray(segmentNames, ADT_A31_SEGMENTS);
  if (isAdtA31) return Hl7MessageType.ADT_A31;

  const isAdtA40 = arrayContainsArray(segmentNames, ADT_A40_SEGMENTS);
  if (isAdtA40) return Hl7MessageType.ADT_A40;

  const isOmgO19 = arrayContainsArray(segmentNames, OMG_019_SEGMENTS);
  if (isOmgO19) return Hl7MessageType.OMG_019;

  const isOruR01 = arrayContainsArray(segmentNames, ORU_R01_SEGMENTS);
  if (isOruR01) return Hl7MessageType.ORU_R01;

  return Hl7MessageType.OTHER;

};

const arrayContainsArray = (smallArray: string[], bigArray: string[]): boolean => {
  return smallArray.every(elem => bigArray.includes(elem));
};


