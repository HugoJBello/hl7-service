
// Generated typescript code of HL7v 2.3 ADD  (Addendum)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AddendumV3Document = mongoose.Document & HL7AddendumV3I

const HL7AddendumV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  addendumContinuationPointer: String,
  
  }, { timestamps: true });
  
export interface HL7AddendumV3I extends Segment{
  addendumContinuationPointer: string
  
  }
  export const HL7AddendumV3 = mongoose.model<HL7AddendumV3Document> ("HL7AddendumV3", HL7AddendumV3Schema);

