
// Generated typescript code of HL7v 2.7 QRI  (Query Response Instance)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryResponseInstanceV7Document = mongoose.Document & HL7QueryResponseInstanceV7I

const HL7QueryResponseInstanceV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  candidateConfidence: Number,
  matchReasonCode: Array(String),
  algorithmDescriptor: String,
  
  }, { timestamps: true });
  
export interface HL7QueryResponseInstanceV7I extends Segment{
  candidateConfidence: number
  matchReasonCode: string[]
  algorithmDescriptor: string
  
  }
  export const HL7QueryResponseInstanceV7 = mongoose.model<HL7QueryResponseInstanceV7Document> ("HL7QueryResponseInstanceV7", HL7QueryResponseInstanceV7Schema);

