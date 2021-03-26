
// Generated typescript code of HL7v 2.8 QRF  (Withdrawn)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7WithdrawnV8Document = mongoose.Document & HL7WithdrawnV8I

const HL7WithdrawnV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  qRF1: String,
  
  }, { timestamps: true });
  
export interface HL7WithdrawnV8I extends Segment{
  qRF1: string
  
  }
  export const HL7WithdrawnV8 = mongoose.model<HL7WithdrawnV8Document> ("HL7WithdrawnV8", HL7WithdrawnV8Schema);

