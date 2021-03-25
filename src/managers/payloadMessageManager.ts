import { Hl7Segment } from "../models/Segment";

const separator = "|";
const arraySeparator = "^";

export interface MessageSegmentPart {
  hl7Key: Hl7Segment
  hl7BodyPart: string
}

const extractLine = (line: string): MessageSegmentPart => {
  if (!line.includes(separator)) {
    throw new Error("incorrect format in line " + line);
  }
  const key = line.split(separator)[0] as Hl7Segment;
  const message = { hl7Key: key, hl7BodyPart: line } as MessageSegmentPart;
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
