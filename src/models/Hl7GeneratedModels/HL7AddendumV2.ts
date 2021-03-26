
// Generated typescript code of HL7v 2.2 ADD  (Addendum)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AddendumV2Document = mongoose.Document & HL7AddendumV2I

const HL7AddendumV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  addendumContinuationPointer: String,
  
  }, { timestamps: true });
  
export interface HL7AddendumV2I extends Segment{
  addendumContinuationPointer: string
  
  }
  export const HL7AddendumV2 = mongoose.model<HL7AddendumV2Document> ("HL7AddendumV2", HL7AddendumV2Schema);

