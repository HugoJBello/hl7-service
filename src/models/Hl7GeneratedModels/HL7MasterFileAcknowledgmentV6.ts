
// Generated typescript code of HL7v 2.6 MFA  (Master File Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileAcknowledgmentV6Document = mongoose.Document & HL7MasterFileAcknowledgmentV6I

const HL7MasterFileAcknowledgmentV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  recordLevelEventCode: String,
  mFNControlID: String,
  eventCompletionDateTime: String,
  mFNRecordLevelErrorReturn: String,
  primaryKeyValueMFA: Array(String),
  primaryKeyValueTypeMFA: Array(String),
  
  }, { timestamps: true });
  
export interface HL7MasterFileAcknowledgmentV6I extends Segment{
  recordLevelEventCode: string
  mFNControlID: string
  eventCompletionDateTime: string
  mFNRecordLevelErrorReturn: string
  primaryKeyValueMFA: string[]
  primaryKeyValueTypeMFA: string[]
  
  }
  export const HL7MasterFileAcknowledgmentV6 = mongoose.model<HL7MasterFileAcknowledgmentV6Document> ("HL7MasterFileAcknowledgmentV6", HL7MasterFileAcknowledgmentV6Schema);

