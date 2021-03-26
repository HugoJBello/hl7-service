
// Generated typescript code of HL7v 2.6 NPU  (Bed Status Update)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BedStatusUpdateV6Document = mongoose.Document & HL7BedStatusUpdateV6I

const HL7BedStatusUpdateV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  bedLocation: String,
  bedStatus: String,
  
  }, { timestamps: true });
  
export interface HL7BedStatusUpdateV6I extends Segment{
  bedLocation: string
  bedStatus: string
  
  }
  export const HL7BedStatusUpdateV6 = mongoose.model<HL7BedStatusUpdateV6Document> ("HL7BedStatusUpdateV6", HL7BedStatusUpdateV6Schema);

