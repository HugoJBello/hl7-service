
// Generated typescript code of HL7v 2.8 QRI  (Query Response Instance)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryResponseInstanceV8Document = mongoose.Document & HL7QueryResponseInstanceV8I

const HL7QueryResponseInstanceV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  candidateConfidence: Number,
  matchReasonCode: Array(String),
  algorithmDescriptor: String,
  
  }, { timestamps: true });
  
export interface HL7QueryResponseInstanceV8I extends Segment{
  candidateConfidence: number
  matchReasonCode: string[]
  algorithmDescriptor: string
  
  }
  export const HL7QueryResponseInstanceV8 = mongoose.model<HL7QueryResponseInstanceV8Document> ("HL7QueryResponseInstanceV8", HL7QueryResponseInstanceV8Schema);

