
// Generated typescript code of HL7v 2.6 QRI  (Query Response Instance)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryResponseInstanceV6Document = mongoose.Document & HL7QueryResponseInstanceV6I

const HL7QueryResponseInstanceV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  candidateConfidence: Number,
  matchReasonCode: Array(String),
  algorithmDescriptor: String,
  
  }, { timestamps: true });
  
export interface HL7QueryResponseInstanceV6I extends Segment{
  candidateConfidence: number
  matchReasonCode: string[]
  algorithmDescriptor: string
  
  }
  export const HL7QueryResponseInstanceV6 = mongoose.model<HL7QueryResponseInstanceV6Document> ("HL7QueryResponseInstanceV6", HL7QueryResponseInstanceV6Schema);

