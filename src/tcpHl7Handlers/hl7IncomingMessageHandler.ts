import { MessageSegmentPart, separateSegmentPart } from "../managers/payloadMessageManager";
import { Hl7Segment, Hl7Version } from "../models/Segment";
import { hl7Decoder } from "../managers/hl7Parser";

export const incomingMessageHandler = (hl7MessageString: string) => {
  const lines = separateSegmentPart(hl7MessageString);
  const hl7Version = extracHl7Version(lines);
  const decodedMessage = [];

  for (const payloadPart of lines) {
    const segment = payloadPart.hl7Key as Hl7Segment;
    const version = hl7Version as Hl7Version;

    const decodedSegment = hl7Decoder(payloadPart.hl7BodyPart, version, segment);
    decodedMessage.push(decodedSegment);
  }
  return decodedMessage;
};

export const extracHl7Version = (messageSegmentLines: MessageSegmentPart[]): string => {
  const messageLine = messageSegmentLines.find((part) => part.hl7Key === Hl7Segment.MessageHeader);
  const splited = messageLine.hl7BodyPart.split("|");
  let version = "2.5";
  if (splited[9].includes("2.")) version = splited[11];
  if (splited[10].includes("2.")) version = splited[10];
  if (splited[11].includes("2.")) version = splited[11];
  if (version === "2.5.1") version = "2.5";
  return version;
};
