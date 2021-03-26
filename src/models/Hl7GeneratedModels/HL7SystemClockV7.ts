
// Generated typescript code of HL7v 2.7 NCK  (System Clock)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7SystemClockV7Document = mongoose.Document & HL7SystemClockV7I

const HL7SystemClockV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  systemDateTime: String,
  
  }, { timestamps: true });
  
export interface HL7SystemClockV7I extends Segment{
  systemDateTime: string
  
  }
  export const HL7SystemClockV7 = mongoose.model<HL7SystemClockV7Document> ("HL7SystemClockV7", HL7SystemClockV7Schema);

