
// Generated typescript code of HL7v 2.8 MSA  (Message Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MessageAcknowledgmentV8Document = mongoose.Document & HL7MessageAcknowledgmentV8I

const HL7MessageAcknowledgmentV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  acknowledgmentCode: String,
  messageControlId: String,
  textMessage: String,
  expectedSequenceNumber: Number,
  delayedAcknowledgmentType: String,
  errorCondition: String,
  messageWaitingNumber: Number,
  messageWaitingPriority: String,
  
  }, { timestamps: true });
  
export interface HL7MessageAcknowledgmentV8I extends Segment{
  acknowledgmentCode: string
  messageControlId: string
  textMessage: string
  expectedSequenceNumber: number
  delayedAcknowledgmentType: string
  errorCondition: string
  messageWaitingNumber: number
  messageWaitingPriority: string
  
  }
  export const HL7MessageAcknowledgmentV8 = mongoose.model<HL7MessageAcknowledgmentV8Document> ("HL7MessageAcknowledgmentV8", HL7MessageAcknowledgmentV8Schema);

