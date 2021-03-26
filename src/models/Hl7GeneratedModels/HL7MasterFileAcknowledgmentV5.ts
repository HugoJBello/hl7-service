
// Generated typescript code of HL7v 2.5 MFA  (Master File Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileAcknowledgmentV5Document = mongoose.Document & HL7MasterFileAcknowledgmentV5I

const HL7MasterFileAcknowledgmentV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  recordLevelEventCode: String,
  mFNControlID: String,
  eventCompletionDateTime: Date,
  mFNRecordLevelErrorReturn: String,
  primaryKeyValueMFA: Array(String),
  primaryKeyValueTypeMFA: Array(String),
  
  }, { timestamps: true });
  
export interface HL7MasterFileAcknowledgmentV5I extends Segment{
  recordLevelEventCode: string
  mFNControlID: string
  eventCompletionDateTime: Date
  mFNRecordLevelErrorReturn: string
  primaryKeyValueMFA: string[]
  primaryKeyValueTypeMFA: string[]
  
  }
  export const HL7MasterFileAcknowledgmentV5 = mongoose.model<HL7MasterFileAcknowledgmentV5Document> ("HL7MasterFileAcknowledgmentV5", HL7MasterFileAcknowledgmentV5Schema);

