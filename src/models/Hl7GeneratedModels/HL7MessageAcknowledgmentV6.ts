
// Generated typescript code of HL7v 2.6 MSA  (Message Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MessageAcknowledgmentV6Document = mongoose.Document & HL7MessageAcknowledgmentV6I

const HL7MessageAcknowledgmentV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  acknowledgmentCode: String,
  messageControlID: String,
  textMessage: String,
  expectedSequenceNumber: Number,
  delayedAcknowledgmentType: String,
  errorCondition: String,
  messageWaitingNumber: Number,
  messageWaitingPriority: String,
  
  }, { timestamps: true });
  
export interface HL7MessageAcknowledgmentV6I extends Segment{
  acknowledgmentCode: string
  messageControlID: string
  textMessage: string
  expectedSequenceNumber: number
  delayedAcknowledgmentType: string
  errorCondition: string
  messageWaitingNumber: number
  messageWaitingPriority: string
  
  }
  export const HL7MessageAcknowledgmentV6 = mongoose.model<HL7MessageAcknowledgmentV6Document> ("HL7MessageAcknowledgmentV6", HL7MessageAcknowledgmentV6Schema);

