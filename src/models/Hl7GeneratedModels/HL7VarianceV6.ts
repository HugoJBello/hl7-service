
// Generated typescript code of HL7v 2.6 VAR  (Variance)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7VarianceV6Document = mongoose.Document & HL7VarianceV6I

const HL7VarianceV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  varianceInstanceID: String,
  documentedDateTime: String,
  statedVarianceDateTime: String,
  varianceOriginator: Array(String),
  varianceClassification: String,
  varianceDescription: Array(String),
  
  }, { timestamps: true });
  
export interface HL7VarianceV6I extends Segment{
  varianceInstanceID: string
  documentedDateTime: string
  statedVarianceDateTime: string
  varianceOriginator: string[]
  varianceClassification: string
  varianceDescription: string[]
  
  }
  export const HL7VarianceV6 = mongoose.model<HL7VarianceV6Document> ("HL7VarianceV6", HL7VarianceV6Schema);

