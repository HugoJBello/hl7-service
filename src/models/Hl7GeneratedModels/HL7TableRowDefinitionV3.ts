
// Generated typescript code of HL7v 2.3 RDF  (Table Row Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TableRowDefinitionV3Document = mongoose.Document & HL7TableRowDefinitionV3I

const HL7TableRowDefinitionV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  numberOfColumnsPerRow: Number,
  columnDescription: Array(String),
  
  }, { timestamps: true });
  
export interface HL7TableRowDefinitionV3I extends Segment{
  numberOfColumnsPerRow: number
  columnDescription: string[]
  
  }
  export const HL7TableRowDefinitionV3 = mongoose.model<HL7TableRowDefinitionV3Document> ("HL7TableRowDefinitionV3", HL7TableRowDefinitionV3Schema);

