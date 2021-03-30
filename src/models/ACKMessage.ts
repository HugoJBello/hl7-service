import mongoose from "mongoose";
import { HL7MessageHeaderV5I } from "./Hl7GeneratedModels/HL7MessageHeaderV5";
import { HL7Message } from "./HL7Message";
import { SegmentExtended } from "./Hl7GeneratedModels/Segment";

export type ACKMessageDocument = mongoose.Document & ACKMessageI;


const ACKMessageSchema = new mongoose.Schema({
  textPayload: String,
  segmentCodes: String,
  id: String,
  hl7Version: String,

  ack: Object,
}, { timestamps: true });

export interface ACKMessageI extends HL7Message {
  ack: any
}

export const ACKMessage = mongoose.model<ACKMessageDocument>("ACKMessage", ACKMessageSchema);
