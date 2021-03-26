
// Generated typescript code of HL7v 2.3 ERR  (Error segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ErrorSegmentV3Document = mongoose.Document & HL7ErrorSegmentV3I

const HL7ErrorSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  errorCodeAndLocation: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ErrorSegmentV3I extends Segment{
  errorCodeAndLocation: string[]
  
  }
  export const HL7ErrorSegmentV3 = mongoose.model<HL7ErrorSegmentV3Document> ("HL7ErrorSegmentV3", HL7ErrorSegmentV3Schema);

