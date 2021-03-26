
// Generated typescript code of HL7v 2.4 NPU  (Bed status update)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BedStatusUpdateV4Document = mongoose.Document & HL7BedStatusUpdateV4I

const HL7BedStatusUpdateV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  bedLocation: String,
  bedStatus: String,
  
  }, { timestamps: true });
  
export interface HL7BedStatusUpdateV4I extends Segment{
  bedLocation: string
  bedStatus: string
  
  }
  export const HL7BedStatusUpdateV4 = mongoose.model<HL7BedStatusUpdateV4Document> ("HL7BedStatusUpdateV4", HL7BedStatusUpdateV4Schema);

