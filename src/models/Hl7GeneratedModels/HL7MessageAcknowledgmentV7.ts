
// Generated typescript code of HL7v 2.7 MSA  (Message Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MessageAcknowledgmentV7Document = mongoose.Document & HL7MessageAcknowledgmentV7I

const HL7MessageAcknowledgmentV7Schema = new mongoose.Schema({
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
  
export interface HL7MessageAcknowledgmentV7I extends Segment{
  acknowledgmentCode: string
  messageControlId: string
  textMessage: string
  expectedSequenceNumber: number
  delayedAcknowledgmentType: string
  errorCondition: string
  messageWaitingNumber: number
  messageWaitingPriority: string
  
  }
  export const HL7MessageAcknowledgmentV7 = mongoose.model<HL7MessageAcknowledgmentV7Document> ("HL7MessageAcknowledgmentV7", HL7MessageAcknowledgmentV7Schema);

