
// Generated typescript code of HL7v 2.3 MSA  (Message acknowledgement segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MessageAcknowledgementSegmentV3Document = mongoose.Document & HL7MessageAcknowledgementSegmentV3I

const HL7MessageAcknowledgementSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  acknowledgementCode: String,
  messageControlID: String,
  textMessage: String,
  expectedSequenceNumber: Number,
  delayedAcknowledgementType: String,
  errorCondition: String,
  
  }, { timestamps: true });
  
export interface HL7MessageAcknowledgementSegmentV3I extends Segment{
  acknowledgementCode: string
  messageControlID: string
  textMessage: string
  expectedSequenceNumber: number
  delayedAcknowledgementType: string
  errorCondition: string
  
  }
  export const HL7MessageAcknowledgementSegmentV3 = mongoose.model<HL7MessageAcknowledgementSegmentV3Document> ("HL7MessageAcknowledgementSegmentV3", HL7MessageAcknowledgementSegmentV3Schema);

