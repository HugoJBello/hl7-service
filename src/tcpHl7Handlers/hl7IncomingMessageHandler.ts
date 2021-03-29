import { classifyMessage, MessageSegmentPart, separateSegmentPart } from "../managers/payloadMessageManager";
import { Hl7Segment, Hl7Version } from "../models/Segment";
import { hl7Decoder } from "../managers/hl7Parser";
import { Hl7MessageType } from "../models/HL7Message";
import { SegmentExtended } from "../models/Hl7GeneratedModels/Segment";
import { ADTA31MessageI } from "../models/ADTA31Message";
import { ADTA40MessageI } from "../models/ADTA40Message";
import { OMGO19MessageI } from "../models/OMG019Message";
import { ORUR01MessageI } from "../models/ORUR01Message";
import { GenericMessageI } from "../models/GenericMessage";
import {
  composeAdtA31,
  composeAdtA40,
  composeGenericUnknownMessage,
  composeOmgO19,
  composeORUR01,
} from "../managers/incomingMessageComposers";

export const incomingMessageHandler = (hl7MessageString: string) => {
  const lines = separateSegmentPart(hl7MessageString);
  const hl7Version = extracHl7Version(lines);
  const messageType = classifyMessage(lines);

  const decodedMessage = decodeGenericMessage(lines, hl7Version as Hl7Version);
  return composeDecodedMessage(decodedMessage, messageType);
};

export const extracHl7Version = (messageSegmentLines: MessageSegmentPart[]): string => {
  const messageLine = messageSegmentLines.find((part) => part.hl7SegmentName === Hl7Segment.MessageHeader);
  const splited = messageLine.hl7SegmentContent.split("|");
  let version = "2.5";
  if (splited[9].includes("2.")) version = splited[11];
  if (splited[10].includes("2.")) version = splited[10];
  if (splited[11].includes("2.")) version = splited[11];
  if (version === "2.5.1") version = "2.5";
  return version;
};

export const decodeGenericMessage = (lines: MessageSegmentPart[], hl7Version: Hl7Version): SegmentExtended[] => {
  const decodedMessage = [];

  for (const payloadPart of lines) {
    const segment = payloadPart.hl7SegmentName as Hl7Segment;
    const version = hl7Version as Hl7Version;

    const decodedSegment = hl7Decoder(payloadPart.hl7SegmentContent, version, segment);
    decodedMessage.push(decodedSegment);
  }
  return decodedMessage;
};

export const composeDecodedMessage = (decodedMessage: any[], messageType: Hl7MessageType): ADTA31MessageI | ADTA40MessageI | OMGO19MessageI | ORUR01MessageI | GenericMessageI => {
  switch (messageType) {
    case Hl7MessageType.ADT_A31:
      return composeAdtA31(decodedMessage);
    case Hl7MessageType.ADT_A40:
      return composeAdtA40(decodedMessage);
    case Hl7MessageType.OMG_019:
      return composeOmgO19(decodedMessage);
    case Hl7MessageType.ORU_R01:
      return composeORUR01(decodedMessage);
    case Hl7MessageType.OTHER:
      return composeGenericUnknownMessage(decodedMessage);
    default:
      return composeGenericUnknownMessage(decodedMessage);
  }
};
