
// Generated typescript code of HL7v 2.8 NPU  (Bed Status Update)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BedStatusUpdateV8Document = mongoose.Document & HL7BedStatusUpdateV8I

const HL7BedStatusUpdateV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  bedLocation: String,
  bedStatus: String,
  
  }, { timestamps: true });
  
export interface HL7BedStatusUpdateV8I extends Segment{
  bedLocation: string
  bedStatus: string
  
  }
  export const HL7BedStatusUpdateV8 = mongoose.model<HL7BedStatusUpdateV8Document> ("HL7BedStatusUpdateV8", HL7BedStatusUpdateV8Schema);

