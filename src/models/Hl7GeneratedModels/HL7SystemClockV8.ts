
// Generated typescript code of HL7v 2.8 NCK  (System Clock)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SystemClockV8Document = mongoose.Document & HL7SystemClockV8I

const HL7SystemClockV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  systemDateTime: String,
  
  }, { timestamps: true });
  
export interface HL7SystemClockV8I extends Segment{
  systemDateTime: string
  
  }
  export const HL7SystemClockV8 = mongoose.model<HL7SystemClockV8Document> ("HL7SystemClockV8", HL7SystemClockV8Schema);

