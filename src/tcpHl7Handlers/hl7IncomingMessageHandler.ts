import { classifyMessage, MessageSegmentPart, separateSegmentPart } from "../managers/payloadMessageManager";
import { Hl7Segment, Hl7Version } from "../models/Segment";
import { hl7Decoder } from "../managers/hl7Parser";
import { Hl7MessageType } from "../models/HL7Message";
import { SegmentExtended } from "../models/Hl7GeneratedModels/Segment";
import { ADTA31Message, ADTA31MessageI } from "../models/ADTA31Message";
import { ADTA40Message } from "../models/ADTA40Message";
import { ADTA40MessageI } from "../models/ADTA40Message";
import { OMG019Message, OMGO19MessageI } from "../models/OMG019Message";
import { ORUR01Message, ORUR01MessageI } from "../models/ORUR01Message";
import { GenericMessage } from "../models/GenericMessage";
import { GenericMessageI } from "../models/GenericMessage";
import {
  composeAdtA31,
  composeAdtA40,
  composeGenericUnknownMessage,
  composeOmgO19,
  composeORUR01,
} from "../managers/incomingMessageComposers";
import { v4 as uuidv4 } from "uuid";

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

export const composeDecodedMessage = async (decodedMessage: any[], messageType: Hl7MessageType): Promise<ADTA31MessageI | ADTA40MessageI | OMGO19MessageI | ORUR01MessageI | GenericMessageI> => {
  const id = uuidv4();
  switch (messageType) {
    case Hl7MessageType.ADT_A31:
      const adta31 = composeAdtA31(decodedMessage);
      adta31.id = id;
      const docAdta31 = new ADTA31Message(adta31);
      await docAdta31.save();
      return adta31;
    case Hl7MessageType.ADT_A40:
      const adta40 = composeAdtA40(decodedMessage);
      adta40.id = id;
      const docAdtA40 = new ADTA40Message(adta40);
      await docAdtA40.save();
      return adta40;
    case Hl7MessageType.OMG_019:
      const omg = composeOmgO19(decodedMessage);
      omg.id = id;
      const docOmg = new OMG019Message(omg);
      await docOmg.save();
      return omg;
    case Hl7MessageType.ORU_R01:
      const oru = composeORUR01(decodedMessage);
      oru.id = id;
      const docOru = new ORUR01Message(oru);
      await docOru.save();
      return oru;
    default:
      return composeGenericUnknownMessage(decodedMessage);
  }
};
