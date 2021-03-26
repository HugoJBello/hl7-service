
// Generated typescript code of HL7v 2.3 MFA  (Master file acknowledgement segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileAcknowledgementSegmentV3Document = mongoose.Document & HL7MasterFileAcknowledgementSegmentV3I

const HL7MasterFileAcknowledgementSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  recordLevelEventCode: String,
  mFNControlID: String,
  eventCompletionDateTime: Date,
  errorReturnCodeAndorText: String,
  primaryKeyValue: Array(String),
  
  }, { timestamps: true });
  
export interface HL7MasterFileAcknowledgementSegmentV3I extends Segment{
  recordLevelEventCode: string
  mFNControlID: string
  eventCompletionDateTime: Date
  errorReturnCodeAndorText: string
  primaryKeyValue: string[]
  
  }
  export const HL7MasterFileAcknowledgementSegmentV3 = mongoose.model<HL7MasterFileAcknowledgementSegmentV3Document> ("HL7MasterFileAcknowledgementSegmentV3", HL7MasterFileAcknowledgementSegmentV3Schema);

