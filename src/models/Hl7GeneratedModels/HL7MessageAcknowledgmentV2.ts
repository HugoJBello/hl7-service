
// Generated typescript code of HL7v 2.2 MSA  (Message Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MessageAcknowledgmentV2Document = mongoose.Document & HL7MessageAcknowledgmentV2I

const HL7MessageAcknowledgmentV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  acknowledgementCode: String,
  messageControlId: String,
  textMessage: String,
  expectedSequenceNumber: Number,
  delayedAcknowledgementType: String,
  errorCondition: String,
  
  }, { timestamps: true });
  
export interface HL7MessageAcknowledgmentV2I extends Segment{
  acknowledgementCode: string
  messageControlId: string
  textMessage: string
  expectedSequenceNumber: number
  delayedAcknowledgementType: string
  errorCondition: string
  
  }
  export const HL7MessageAcknowledgmentV2 = mongoose.model<HL7MessageAcknowledgmentV2Document> ("HL7MessageAcknowledgmentV2", HL7MessageAcknowledgmentV2Schema);

