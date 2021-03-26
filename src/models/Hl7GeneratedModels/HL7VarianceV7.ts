
// Generated typescript code of HL7v 2.7 VAR  (Variance)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7VarianceV7Document = mongoose.Document & HL7VarianceV7I

const HL7VarianceV7Schema = new mongoose.Schema({
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
  
export interface HL7VarianceV7I extends Segment{
  varianceInstanceId: string
  documentedDateTime: string
  statedVarianceDateTime: string
  varianceOriginator: string[]
  varianceClassification: string
  varianceDescription: string[]
  
  }
  export const HL7VarianceV7 = mongoose.model<HL7VarianceV7Document> ("HL7VarianceV7", HL7VarianceV7Schema);

