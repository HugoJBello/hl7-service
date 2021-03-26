
// Generated typescript code of HL7v 2.8 ZL7  ((proposed Example Only))

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProposedExampleOnlyV8Document = mongoose.Document & HL7ProposedExampleOnlyV8I

const HL7ProposedExampleOnlyV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  zL71: String,
  
  }, { timestamps: true });
  
export interface HL7ProposedExampleOnlyV8I extends Segment{
  zL71: string
  
  }
  export const HL7ProposedExampleOnlyV8 = mongoose.model<HL7ProposedExampleOnlyV8Document> ("HL7ProposedExampleOnlyV8", HL7ProposedExampleOnlyV8Schema);

