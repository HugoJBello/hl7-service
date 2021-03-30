import { Hl7Version } from "./Segment";

export interface HL7Message {
  textPayload: string
  segmentCodes: string[]
  id: string
  hl7Version: Hl7Version
  hl7MessageType: Hl7MessageType
  status: Status
}

export const ADT_A31_SEGMENTS = ["MSH", "EVN", "PID", "PD1", "ROL", "PV1", "GT1"];
export const ADT_A40_SEGMENTS = ["MSH", "EVN", "PID", "MRG"];
export const OMG_019_SEGMENTS = ["MSH", "PID", "PV1", "ORC", "TQ1", "OBR"];
export const ORU_R01_SEGMENTS = ["MSH", "PID", "PV1", "ORC", "OBR", "OBX"];


export enum Hl7MessageType {
  ADT_A31 = "ADT_A31",
  ADT_A40 = "ADT_A40",
  OMG_019 = "OMG_019",
  ORU_R01 = "ORU_R01",
  OTHER = "OTHER"
}

export enum Status {
  SENT = "SENT",
  CONFIRMED = "CONFIRMED",
}
