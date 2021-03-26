
// Generated typescript code of HL7v 2.3 DSC  (Continuation pointer segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ContinuationPointerSegmentV3Document = mongoose.Document & HL7ContinuationPointerSegmentV3I

const HL7ContinuationPointerSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  continuationPointer: String,
  
  }, { timestamps: true });
  
export interface HL7ContinuationPointerSegmentV3I extends Segment{
  continuationPointer: string
  
  }
  export const HL7ContinuationPointerSegmentV3 = mongoose.model<HL7ContinuationPointerSegmentV3Document> ("HL7ContinuationPointerSegmentV3", HL7ContinuationPointerSegmentV3Schema);

