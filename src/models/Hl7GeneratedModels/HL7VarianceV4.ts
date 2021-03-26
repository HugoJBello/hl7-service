
// Generated typescript code of HL7v 2.4 VAR  (Variance)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7VarianceV4Document = mongoose.Document & HL7VarianceV4I

const HL7VarianceV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  varianceInstanceID: String,
  documentedDateTime: Date,
  statedVarianceDateTime: Date,
  varianceOriginator: Array(String),
  varianceClassification: String,
  varianceDescription: Array(String),
  
  }, { timestamps: true });
  
export interface HL7VarianceV4I extends Segment{
  varianceInstanceID: string
  documentedDateTime: Date
  statedVarianceDateTime: Date
  varianceOriginator: string[]
  varianceClassification: string
  varianceDescription: string[]
  
  }
  export const HL7VarianceV4 = mongoose.model<HL7VarianceV4Document> ("HL7VarianceV4", HL7VarianceV4Schema);

