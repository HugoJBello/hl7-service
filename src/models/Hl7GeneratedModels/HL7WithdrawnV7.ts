
// Generated typescript code of HL7v 2.7 URS  (Withdrawn)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7WithdrawnV7Document = mongoose.Document & HL7WithdrawnV7I

const HL7WithdrawnV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  uRS1: String,
  
  }, { timestamps: true });
  
export interface HL7WithdrawnV7I extends Segment{
  uRS1: string
  
  }
  export const HL7WithdrawnV7 = mongoose.model<HL7WithdrawnV7Document> ("HL7WithdrawnV7", HL7WithdrawnV7Schema);

