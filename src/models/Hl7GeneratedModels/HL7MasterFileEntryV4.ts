
// Generated typescript code of HL7v 2.4 MFE  (Master File Entry)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileEntryV4Document = mongoose.Document & HL7MasterFileEntryV4I

const HL7MasterFileEntryV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  recordLevelEventCode: String,
  mFNControlID: String,
  effectiveDateTime: Date,
  primaryKeyValueMFE: Array(String),
  primaryKeyValueType: Array(String),
  
  }, { timestamps: true });
  
export interface HL7MasterFileEntryV4I extends Segment{
  recordLevelEventCode: string
  mFNControlID: string
  effectiveDateTime: Date
  primaryKeyValueMFE: string[]
  primaryKeyValueType: string[]
  
  }
  export const HL7MasterFileEntryV4 = mongoose.model<HL7MasterFileEntryV4Document> ("HL7MasterFileEntryV4", HL7MasterFileEntryV4Schema);

