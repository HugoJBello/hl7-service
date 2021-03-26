
// Generated typescript code of HL7v 2.5 MSA  (Message Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MessageAcknowledgmentV5Document = mongoose.Document & HL7MessageAcknowledgmentV5I

const HL7MessageAcknowledgmentV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  acknowledgmentCode: String,
  messageControlID: String,
  textMessage: String,
  expectedSequenceNumber: Number,
  delayedAcknowledgmentType: String,
  errorCondition: String,
  
  }, { timestamps: true });
  
export interface HL7MessageAcknowledgmentV5I extends Segment{
  acknowledgmentCode: string
  messageControlID: string
  textMessage: string
  expectedSequenceNumber: number
  delayedAcknowledgmentType: string
  errorCondition: string
  
  }
  export const HL7MessageAcknowledgmentV5 = mongoose.model<HL7MessageAcknowledgmentV5Document> ("HL7MessageAcknowledgmentV5", HL7MessageAcknowledgmentV5Schema);

