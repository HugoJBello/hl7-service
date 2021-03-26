
// Generated typescript code of HL7v 2.8 MFE  (Master File Entry)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileEntryV8Document = mongoose.Document & HL7MasterFileEntryV8I

const HL7MasterFileEntryV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  recordlevelEventCode: String,
  mfnControlId: String,
  effectiveDateTime: String,
  primaryKeyValueMfe: Array(String),
  primaryKeyValueType: Array(String),
  enteredDateTime: String,
  enteredBy: String,
  
  }, { timestamps: true });
  
export interface HL7MasterFileEntryV8I extends Segment{
  recordlevelEventCode: string
  mfnControlId: string
  effectiveDateTime: string
  primaryKeyValueMfe: string[]
  primaryKeyValueType: string[]
  enteredDateTime: string
  enteredBy: string
  
  }
  export const HL7MasterFileEntryV8 = mongoose.model<HL7MasterFileEntryV8Document> ("HL7MasterFileEntryV8", HL7MasterFileEntryV8Schema);

