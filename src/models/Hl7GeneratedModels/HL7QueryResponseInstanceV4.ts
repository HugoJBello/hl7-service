
// Generated typescript code of HL7v 2.4 QRI  (Query Response Instance)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryResponseInstanceV4Document = mongoose.Document & HL7QueryResponseInstanceV4I

const HL7QueryResponseInstanceV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  candidateConfidence: Number,
  matchReasonCode: Array(String),
  algorithmDescriptor: String,
  
  }, { timestamps: true });
  
export interface HL7QueryResponseInstanceV4I extends Segment{
  candidateConfidence: number
  matchReasonCode: string[]
  algorithmDescriptor: string
  
  }
  export const HL7QueryResponseInstanceV4 = mongoose.model<HL7QueryResponseInstanceV4Document> ("HL7QueryResponseInstanceV4", HL7QueryResponseInstanceV4Schema);

