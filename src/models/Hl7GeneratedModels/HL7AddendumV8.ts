
// Generated typescript code of HL7v 2.8 ADD  (Addendum)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AddendumV8Document = mongoose.Document & HL7AddendumV8I

const HL7AddendumV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  addendumContinuationPointer: String,
  
  }, { timestamps: true });
  
export interface HL7AddendumV8I extends Segment{
  addendumContinuationPointer: string
  
  }
  export const HL7AddendumV8 = mongoose.model<HL7AddendumV8Document> ("HL7AddendumV8", HL7AddendumV8Schema);

