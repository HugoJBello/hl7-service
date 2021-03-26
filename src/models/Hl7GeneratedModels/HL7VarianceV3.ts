
// Generated typescript code of HL7v 2.3 VAR  (Variance)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7VarianceV3Document = mongoose.Document & HL7VarianceV3I

const HL7VarianceV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  varianceInstanceID: String,
  documentedDateTime: Date,
  statedVarianceDateTime: Date,
  varianceOriginator: String,
  varianceClassification: String,
  varianceDescription: Array(String),
  
  }, { timestamps: true });
  
export interface HL7VarianceV3I extends Segment{
  varianceInstanceID: string
  documentedDateTime: Date
  statedVarianceDateTime: Date
  varianceOriginator: string
  varianceClassification: string
  varianceDescription: string[]
  
  }
  export const HL7VarianceV3 = mongoose.model<HL7VarianceV3Document> ("HL7VarianceV3", HL7VarianceV3Schema);

