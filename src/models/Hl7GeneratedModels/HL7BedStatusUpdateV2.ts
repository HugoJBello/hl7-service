
// Generated typescript code of HL7v 2.2 NPU  (Bed Status Update)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BedStatusUpdateV2Document = mongoose.Document & HL7BedStatusUpdateV2I

const HL7BedStatusUpdateV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  bedLocation: String,
  bedStatus: String,
  
  }, { timestamps: true });
  
export interface HL7BedStatusUpdateV2I extends Segment{
  bedLocation: string
  bedStatus: string
  
  }
  export const HL7BedStatusUpdateV2 = mongoose.model<HL7BedStatusUpdateV2Document> ("HL7BedStatusUpdateV2", HL7BedStatusUpdateV2Schema);

