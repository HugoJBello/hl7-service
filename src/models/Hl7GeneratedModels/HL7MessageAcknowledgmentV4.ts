
// Generated typescript code of HL7v 2.4 MSA  (Message Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MessageAcknowledgmentV4Document = mongoose.Document & HL7MessageAcknowledgmentV4I

const HL7MessageAcknowledgmentV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  acknowledgementCode: String,
  messageControlID: String,
  textMessage: String,
  expectedSequenceNumber: Number,
  delayedAcknowledgmentType: String,
  errorCondition: String,
  
  }, { timestamps: true });
  
export interface HL7MessageAcknowledgmentV4I extends Segment{
  acknowledgementCode: string
  messageControlID: string
  textMessage: string
  expectedSequenceNumber: number
  delayedAcknowledgmentType: string
  errorCondition: string
  
  }
  export const HL7MessageAcknowledgmentV4 = mongoose.model<HL7MessageAcknowledgmentV4Document> ("HL7MessageAcknowledgmentV4", HL7MessageAcknowledgmentV4Schema);

