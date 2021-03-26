
// Generated typescript code of HL7v 2.6 MFE  (Master File Entry)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileEntryV6Document = mongoose.Document & HL7MasterFileEntryV6I

const HL7MasterFileEntryV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  recordLevelEventCode: String,
  mFNControlID: String,
  effectiveDateTime: String,
  primaryKeyValueMFE: Array(String),
  primaryKeyValueType: Array(String),
  enteredDateTime: String,
  enteredBy: String,
  
  }, { timestamps: true });
  
export interface HL7MasterFileEntryV6I extends Segment{
  recordLevelEventCode: string
  mFNControlID: string
  effectiveDateTime: string
  primaryKeyValueMFE: string[]
  primaryKeyValueType: string[]
  enteredDateTime: string
  enteredBy: string
  
  }
  export const HL7MasterFileEntryV6 = mongoose.model<HL7MasterFileEntryV6Document> ("HL7MasterFileEntryV6", HL7MasterFileEntryV6Schema);

