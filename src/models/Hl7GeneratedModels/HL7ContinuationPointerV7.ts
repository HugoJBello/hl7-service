
// Generated typescript code of HL7v 2.7 DSC  (Continuation Pointer)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ContinuationPointerV7Document = mongoose.Document & HL7ContinuationPointerV7I

const HL7ContinuationPointerV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  continuationPointer: String,
  continuationStyle: String,
  
  }, { timestamps: true });
  
export interface HL7ContinuationPointerV7I extends Segment{
  continuationPointer: string
  continuationStyle: string
  
  }
  export const HL7ContinuationPointerV7 = mongoose.model<HL7ContinuationPointerV7Document> ("HL7ContinuationPointerV7", HL7ContinuationPointerV7Schema);

