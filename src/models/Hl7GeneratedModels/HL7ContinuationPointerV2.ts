
// Generated typescript code of HL7v 2.2 DSC  (Continuation Pointer)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ContinuationPointerV2Document = mongoose.Document & HL7ContinuationPointerV2I

const HL7ContinuationPointerV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  continuationPointer: String,
  
  }, { timestamps: true });
  
export interface HL7ContinuationPointerV2I extends Segment{
  continuationPointer: string
  
  }
  export const HL7ContinuationPointerV2 = mongoose.model<HL7ContinuationPointerV2Document> ("HL7ContinuationPointerV2", HL7ContinuationPointerV2Schema);

