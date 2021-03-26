
// Generated typescript code of HL7v 2.8 VAR  (Variance)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7VarianceV8Document = mongoose.Document & HL7VarianceV8I

const HL7VarianceV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  varianceInstanceId: String,
  documentedDateTime: String,
  statedVarianceDateTime: String,
  varianceOriginator: Array(String),
  varianceClassification: String,
  varianceDescription: Array(String),
  
  }, { timestamps: true });
  
export interface HL7VarianceV8I extends Segment{
  varianceInstanceId: string
  documentedDateTime: string
  statedVarianceDateTime: string
  varianceOriginator: string[]
  varianceClassification: string
  varianceDescription: string[]
  
  }
  export const HL7VarianceV8 = mongoose.model<HL7VarianceV8Document> ("HL7VarianceV8", HL7VarianceV8Schema);

