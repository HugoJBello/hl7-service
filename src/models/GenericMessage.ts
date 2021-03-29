import mongoose from "mongoose";
import { HL7MessageHeaderV5I } from "./Hl7GeneratedModels/HL7MessageHeaderV5";
import { HL7Message } from "./HL7Message";
import { SegmentExtended } from "./Hl7GeneratedModels/Segment";

export type GenericMessageDocument = mongoose.Document & GenericMessageI;


const GenericMessageSchema = new mongoose.Schema({
  textPayload: String,
  segmentCodes: String,
  id: String,
  hl7Version: String,

  messageHeader: Object,
  segments: Array(Object)
}, { timestamps: true });

export interface GenericMessageI extends HL7Message {
  messageHeader: HL7MessageHeaderV5I
  segments: SegmentExtended[]
}

export const GenericMessage = mongoose.model<GenericMessageDocument>("GenericMessage", GenericMessageSchema);
