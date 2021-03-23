import { MessageSegmentPart, separateSegmentPart } from "../managers/payloadMessageManager";
import { Hl7Segment } from "../models/Segment";
import { hl7OBSXDecoder } from "../managers/hl7ObservationParser";
import { hl7MSHDecoder } from "../managers/hl7MessageHeaderParser";


export const messageHandler = (hl7MessageString: string) => {
  const lines = separateSegmentPart(hl7MessageString)
  const hl7Version = extracHl7Version(lines)
  const decodedMessage = []

  for (const payloadPart of lines) {

    switch (payloadPart.hl7Key) {
      case Hl7Segment.OBSERVATION:
        const observation = hl7OBSXDecoder(payloadPart.hl7BodyPart, hl7Version)
        decodedMessage.push(observation)
      case Hl7Segment.MESSAGE_HEADER:
        const header = hl7MSHDecoder(payloadPart.hl7BodyPart, hl7Version)
        decodedMessage.push(header)
    }
  }
  return decodedMessage
}

export const extracHl7Version = (messageSegmentLines: MessageSegmentPart[]):string => {
  const messageLine = messageSegmentLines.find((part) => part.hl7Key === Hl7Segment.MESSAGE_HEADER)
  const splited = messageLine.hl7BodyPart.split("|")
  return splited[splited.length-1]
}
