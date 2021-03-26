
// Generated typescript code of HL7v 2.4 NCK  (System clock)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SystemClockV4Document = mongoose.Document & HL7SystemClockV4I

const HL7SystemClockV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  systemDateTime: Date,
  
  }, { timestamps: true });
  
export interface HL7SystemClockV4I extends Segment{
  systemDateTime: Date
  
  }
  export const HL7SystemClockV4 = mongoose.model<HL7SystemClockV4Document> ("HL7SystemClockV4", HL7SystemClockV4Schema);

