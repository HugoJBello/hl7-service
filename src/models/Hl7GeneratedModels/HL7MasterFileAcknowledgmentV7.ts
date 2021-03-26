
// Generated typescript code of HL7v 2.7 MFA  (Master File Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileAcknowledgmentV7Document = mongoose.Document & HL7MasterFileAcknowledgmentV7I

const HL7MasterFileAcknowledgmentV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  recordlevelEventCode: String,
  mfnControlId: String,
  eventCompletionDateTime: String,
  mfnRecordLevelErrorReturn: String,
  primaryKeyValueMfa: Array(String),
  primaryKeyValueTypeMfa: Array(String),
  
  }, { timestamps: true });
  
export interface HL7MasterFileAcknowledgmentV7I extends Segment{
  recordlevelEventCode: string
  mfnControlId: string
  eventCompletionDateTime: string
  mfnRecordLevelErrorReturn: string
  primaryKeyValueMfa: string[]
  primaryKeyValueTypeMfa: string[]
  
  }
  export const HL7MasterFileAcknowledgmentV7 = mongoose.model<HL7MasterFileAcknowledgmentV7Document> ("HL7MasterFileAcknowledgmentV7", HL7MasterFileAcknowledgmentV7Schema);

