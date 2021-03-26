
// Generated typescript code of HL7v 2.6 NCK  (System Clock)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SystemClockV6Document = mongoose.Document & HL7SystemClockV6I

const HL7SystemClockV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  systemDateTime: String,
  
  }, { timestamps: true });
  
export interface HL7SystemClockV6I extends Segment{
  systemDateTime: string
  
  }
  export const HL7SystemClockV6 = mongoose.model<HL7SystemClockV6Document> ("HL7SystemClockV6", HL7SystemClockV6Schema);

