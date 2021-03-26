
// Generated typescript code of HL7v 2.7 ADD  (Addendum)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AddendumV7Document = mongoose.Document & HL7AddendumV7I

const HL7AddendumV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  addendumContinuationPointer: String,
  
  }, { timestamps: true });
  
export interface HL7AddendumV7I extends Segment{
  addendumContinuationPointer: string
  
  }
  export const HL7AddendumV7 = mongoose.model<HL7AddendumV7Document> ("HL7AddendumV7", HL7AddendumV7Schema);

