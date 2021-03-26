
// Generated typescript code of HL7v 2.3 NCK  (System Clock)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SystemClockV3Document = mongoose.Document & HL7SystemClockV3I

const HL7SystemClockV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  systemDateTime: Date,
  
  }, { timestamps: true });
  
export interface HL7SystemClockV3I extends Segment{
  systemDateTime: Date
  
  }
  export const HL7SystemClockV3 = mongoose.model<HL7SystemClockV3Document> ("HL7SystemClockV3", HL7SystemClockV3Schema);

