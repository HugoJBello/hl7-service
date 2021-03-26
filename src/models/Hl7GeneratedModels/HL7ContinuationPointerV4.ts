
// Generated typescript code of HL7v 2.4 DSC  (Continuation Pointer)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ContinuationPointerV4Document = mongoose.Document & HL7ContinuationPointerV4I

const HL7ContinuationPointerV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  continuationPointer: String,
  continuationStyle: String,
  
  }, { timestamps: true });
  
export interface HL7ContinuationPointerV4I extends Segment{
  continuationPointer: string
  continuationStyle: string
  
  }
  export const HL7ContinuationPointerV4 = mongoose.model<HL7ContinuationPointerV4Document> ("HL7ContinuationPointerV4", HL7ContinuationPointerV4Schema);

