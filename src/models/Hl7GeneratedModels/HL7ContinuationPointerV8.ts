
// Generated typescript code of HL7v 2.8 DSC  (Continuation Pointer)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ContinuationPointerV8Document = mongoose.Document & HL7ContinuationPointerV8I

const HL7ContinuationPointerV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  continuationPointer: String,
  continuationStyle: String,
  
  }, { timestamps: true });
  
export interface HL7ContinuationPointerV8I extends Segment{
  continuationPointer: string
  continuationStyle: string
  
  }
  export const HL7ContinuationPointerV8 = mongoose.model<HL7ContinuationPointerV8Document> ("HL7ContinuationPointerV8", HL7ContinuationPointerV8Schema);

