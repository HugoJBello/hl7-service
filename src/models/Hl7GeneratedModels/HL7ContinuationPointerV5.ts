
// Generated typescript code of HL7v 2.5 DSC  (Continuation Pointer)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ContinuationPointerV5Document = mongoose.Document & HL7ContinuationPointerV5I

const HL7ContinuationPointerV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  continuationPointer: String,
  continuationStyle: String,
  
  }, { timestamps: true });
  
export interface HL7ContinuationPointerV5I extends Segment{
  continuationPointer: string
  continuationStyle: string
  
  }
  export const HL7ContinuationPointerV5 = mongoose.model<HL7ContinuationPointerV5Document> ("HL7ContinuationPointerV5", HL7ContinuationPointerV5Schema);

