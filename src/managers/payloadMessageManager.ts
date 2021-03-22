import { SchemeField } from "../models/Schema";
import { Segment } from "../models/Segment";

const separator = "|";
const arraySeparator = "^";

export interface MessagePart {
  hl7Key: Segment
  hl7BodyPart: string
}

const extractLine = (line:string):MessagePart =>{
  if (!line.includes("|")) {
    throw new Error("incorrect format in line " + line)
  }
  const key = line.split("|")[0] as Segment
  const bodyPart = line
  const message = {hl7Key: key, hl7BodyPart:bodyPart} as MessagePart
  return message
}

export const separatePayload = (hl7Payload: string): MessagePart[] => {
  const messageParts = [] as MessagePart[]
  if (hl7Payload.includes("\n")) {
    for (let line of hl7Payload.split("\n")){
      const message = extractLine(line)
      messageParts.push(message)
    }
  } else {
    const message = extractLine(hl7Payload)
    messageParts.push(message)
  }
  return messageParts
};
