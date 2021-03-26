
// Generated typescript code of HL7v 2.3 NPU  (Bed status update)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BedStatusUpdateV3Document = mongoose.Document & HL7BedStatusUpdateV3I

const HL7BedStatusUpdateV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  bedLocation: String,
  bedStatus: String,
  
  }, { timestamps: true });
  
export interface HL7BedStatusUpdateV3I extends Segment{
  bedLocation: string
  bedStatus: string
  
  }
  export const HL7BedStatusUpdateV3 = mongoose.model<HL7BedStatusUpdateV3Document> ("HL7BedStatusUpdateV3", HL7BedStatusUpdateV3Schema);

