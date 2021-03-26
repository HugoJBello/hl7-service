
// Generated typescript code of HL7v 2.6 ADD  (Addendum)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AddendumV6Document = mongoose.Document & HL7AddendumV6I

const HL7AddendumV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  addendumContinuationPointer: String,
  
  }, { timestamps: true });
  
export interface HL7AddendumV6I extends Segment{
  addendumContinuationPointer: string
  
  }
  export const HL7AddendumV6 = mongoose.model<HL7AddendumV6Document> ("HL7AddendumV6", HL7AddendumV6Schema);

