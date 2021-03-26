
// Generated typescript code of HL7v 2.7 NPU  (Bed Status Update)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BedStatusUpdateV7Document = mongoose.Document & HL7BedStatusUpdateV7I

const HL7BedStatusUpdateV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  bedLocation: String,
  bedStatus: String,
  
  }, { timestamps: true });
  
export interface HL7BedStatusUpdateV7I extends Segment{
  bedLocation: string
  bedStatus: string
  
  }
  export const HL7BedStatusUpdateV7 = mongoose.model<HL7BedStatusUpdateV7Document> ("HL7BedStatusUpdateV7", HL7BedStatusUpdateV7Schema);

