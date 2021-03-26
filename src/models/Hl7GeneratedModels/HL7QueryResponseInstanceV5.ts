
// Generated typescript code of HL7v 2.5 QRI  (Query Response Instance)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7QueryResponseInstanceV5Document = mongoose.Document & HL7QueryResponseInstanceV5I

const HL7QueryResponseInstanceV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  candidateConfidence: Number,
  matchReasonCode: Array(String),
  algorithmDescriptor: String,
  
  }, { timestamps: true });
  
export interface HL7QueryResponseInstanceV5I extends Segment{
  candidateConfidence: number
  matchReasonCode: string[]
  algorithmDescriptor: string
  
  }
  export const HL7QueryResponseInstanceV5 = mongoose.model<HL7QueryResponseInstanceV5Document> ("HL7QueryResponseInstanceV5", HL7QueryResponseInstanceV5Schema);

