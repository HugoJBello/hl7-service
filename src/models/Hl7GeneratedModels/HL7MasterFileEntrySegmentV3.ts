
// Generated typescript code of HL7v 2.3 MFE  (Master file entry segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MasterFileEntrySegmentV3Document = mongoose.Document & HL7MasterFileEntrySegmentV3I

const HL7MasterFileEntrySegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  recordLevelEventCode: String,
  mFNControlID: String,
  effectiveDateTime: Date,
  primaryKeyValue: Array(String),
  
  }, { timestamps: true });
  
export interface HL7MasterFileEntrySegmentV3I extends Segment{
  recordLevelEventCode: string
  mFNControlID: string
  effectiveDateTime: Date
  primaryKeyValue: string[]
  
  }
  export const HL7MasterFileEntrySegmentV3 = mongoose.model<HL7MasterFileEntrySegmentV3Document> ("HL7MasterFileEntrySegmentV3", HL7MasterFileEntrySegmentV3Schema);

