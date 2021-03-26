
// Generated typescript code of HL7v 2.5 VAR  (Variance)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7VarianceV5Document = mongoose.Document & HL7VarianceV5I

const HL7VarianceV5Schema = new mongoose.Schema({
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
  
export interface HL7VarianceV5I extends Segment{
  varianceInstanceID: string
  documentedDateTime: Date
  statedVarianceDateTime: Date
  varianceOriginator: string[]
  varianceClassification: string
  varianceDescription: string[]
  
  }
  export const HL7VarianceV5 = mongoose.model<HL7VarianceV5Document> ("HL7VarianceV5", HL7VarianceV5Schema);

