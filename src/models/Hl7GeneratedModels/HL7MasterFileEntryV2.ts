
// Generated typescript code of HL7v 2.2 MFE  (Master File Entry)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileEntryV2Document = mongoose.Document & HL7MasterFileEntryV2I

const HL7MasterFileEntryV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  recordlevelEventCode: String,
  mfnControlId: String,
  effectiveDateTime: Date,
  primaryKeyValue: Array(String),
  
  }, { timestamps: true });
  
export interface HL7MasterFileEntryV2I extends Segment{
  recordlevelEventCode: string
  mfnControlId: string
  effectiveDateTime: Date
  primaryKeyValue: string[]
  
  }
  export const HL7MasterFileEntryV2 = mongoose.model<HL7MasterFileEntryV2Document> ("HL7MasterFileEntryV2", HL7MasterFileEntryV2Schema);

