
// Generated typescript code of HL7v 2.5 NCK  (System Clock)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SystemClockV5Document = mongoose.Document & HL7SystemClockV5I

const HL7SystemClockV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  systemDateTime: Date,
  
  }, { timestamps: true });
  
export interface HL7SystemClockV5I extends Segment{
  systemDateTime: Date
  
  }
  export const HL7SystemClockV5 = mongoose.model<HL7SystemClockV5Document> ("HL7SystemClockV5", HL7SystemClockV5Schema);

