
// Generated typescript code of HL7v 2.4 MFA  (Master File Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileAcknowledgmentV4Document = mongoose.Document & HL7MasterFileAcknowledgmentV4I

const HL7MasterFileAcknowledgmentV4Schema = new mongoose.Schema({
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
  
export interface HL7MasterFileAcknowledgmentV4I extends Segment{
  recordLevelEventCode: string
  mFNControlID: string
  eventCompletionDateTime: Date
  mFNRecordLevelErrorReturn: string
  primaryKeyValueMFA: string[]
  primaryKeyValueTypeMFA: string[]
  
  }
  export const HL7MasterFileAcknowledgmentV4 = mongoose.model<HL7MasterFileAcknowledgmentV4Document> ("HL7MasterFileAcknowledgmentV4", HL7MasterFileAcknowledgmentV4Schema);

