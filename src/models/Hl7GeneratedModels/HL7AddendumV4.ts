
// Generated typescript code of HL7v 2.4 ADD  (Addendum)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AddendumV4Document = mongoose.Document & HL7AddendumV4I

const HL7AddendumV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  addendumContinuationPointer: String,
  
  }, { timestamps: true });
  
export interface HL7AddendumV4I extends Segment{
  addendumContinuationPointer: string
  
  }
  export const HL7AddendumV4 = mongoose.model<HL7AddendumV4Document> ("HL7AddendumV4", HL7AddendumV4Schema);

