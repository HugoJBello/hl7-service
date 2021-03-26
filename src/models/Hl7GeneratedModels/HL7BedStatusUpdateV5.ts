
// Generated typescript code of HL7v 2.5 NPU  (Bed Status Update)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BedStatusUpdateV5Document = mongoose.Document & HL7BedStatusUpdateV5I

const HL7BedStatusUpdateV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  bedLocation: String,
  bedStatus: String,
  
  }, { timestamps: true });
  
export interface HL7BedStatusUpdateV5I extends Segment{
  bedLocation: string
  bedStatus: string
  
  }
  export const HL7BedStatusUpdateV5 = mongoose.model<HL7BedStatusUpdateV5Document> ("HL7BedStatusUpdateV5", HL7BedStatusUpdateV5Schema);

