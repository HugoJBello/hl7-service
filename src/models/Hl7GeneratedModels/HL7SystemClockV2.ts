
// Generated typescript code of HL7v 2.2 NCK  (System Clock)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SystemClockV2Document = mongoose.Document & HL7SystemClockV2I

const HL7SystemClockV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  systemDateTime: Date,
  
  }, { timestamps: true });
  
export interface HL7SystemClockV2I extends Segment{
  systemDateTime: Date
  
  }
  export const HL7SystemClockV2 = mongoose.model<HL7SystemClockV2Document> ("HL7SystemClockV2", HL7SystemClockV2Schema);

