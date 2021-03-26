
// Generated typescript code of HL7v 2.5 MFE  (Master File Entry)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileEntryV5Document = mongoose.Document & HL7MasterFileEntryV5I

const HL7MasterFileEntryV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  recordLevelEventCode: String,
  mFNControlID: String,
  effectiveDateTime: Date,
  primaryKeyValueMFE: Array(String),
  primaryKeyValueType: Array(String),
  
  }, { timestamps: true });
  
export interface HL7MasterFileEntryV5I extends Segment{
  recordLevelEventCode: string
  mFNControlID: string
  effectiveDateTime: Date
  primaryKeyValueMFE: string[]
  primaryKeyValueType: string[]
  
  }
  export const HL7MasterFileEntryV5 = mongoose.model<HL7MasterFileEntryV5Document> ("HL7MasterFileEntryV5", HL7MasterFileEntryV5Schema);

