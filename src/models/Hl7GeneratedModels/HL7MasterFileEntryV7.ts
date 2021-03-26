
// Generated typescript code of HL7v 2.7 MFE  (Master File Entry)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileEntryV7Document = mongoose.Document & HL7MasterFileEntryV7I

const HL7MasterFileEntryV7Schema = new mongoose.Schema({
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
  
export interface HL7MasterFileEntryV7I extends Segment{
  recordlevelEventCode: string
  mfnControlId: string
  effectiveDateTime: string
  primaryKeyValueMfe: string[]
  primaryKeyValueType: string[]
  enteredDateTime: string
  enteredBy: string
  
  }
  export const HL7MasterFileEntryV7 = mongoose.model<HL7MasterFileEntryV7Document> ("HL7MasterFileEntryV7", HL7MasterFileEntryV7Schema);

