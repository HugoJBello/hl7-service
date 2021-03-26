
// Generated typescript code of HL7v 2.6 DSC  (Continuation Pointer)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ContinuationPointerV6Document = mongoose.Document & HL7ContinuationPointerV6I

const HL7ContinuationPointerV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  continuationPointer: String,
  continuationStyle: String,
  
  }, { timestamps: true });
  
export interface HL7ContinuationPointerV6I extends Segment{
  continuationPointer: string
  continuationStyle: string
  
  }
  export const HL7ContinuationPointerV6 = mongoose.model<HL7ContinuationPointerV6Document> ("HL7ContinuationPointerV6", HL7ContinuationPointerV6Schema);

