
// Generated typescript code of HL7v 2.8 MFA  (Master File Acknowledgment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileAcknowledgmentV8Document = mongoose.Document & HL7MasterFileAcknowledgmentV8I

const HL7MasterFileAcknowledgmentV8Schema = new mongoose.Schema({
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
  
export interface HL7MasterFileAcknowledgmentV8I extends Segment{
  recordlevelEventCode: string
  mfnControlId: string
  eventCompletionDateTime: string
  mfnRecordLevelErrorReturn: string
  primaryKeyValueMfa: string[]
  primaryKeyValueTypeMfa: string[]
  
  }
  export const HL7MasterFileAcknowledgmentV8 = mongoose.model<HL7MasterFileAcknowledgmentV8Document> ("HL7MasterFileAcknowledgmentV8", HL7MasterFileAcknowledgmentV8Schema);

