
// Generated typescript code of HL7v 2.5 ADD  (Addendum)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AddendumV5Document = mongoose.Document & HL7AddendumV5I

const HL7AddendumV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  addendumContinuationPointer: String,
  
  }, { timestamps: true });
  
export interface HL7AddendumV5I extends Segment{
  addendumContinuationPointer: string
  
  }
  export const HL7AddendumV5 = mongoose.model<HL7AddendumV5Document> ("HL7AddendumV5", HL7AddendumV5Schema);

