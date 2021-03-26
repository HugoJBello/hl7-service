
// Generated typescript code of HL7v 2.6 RDF  (Table Row Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TableRowDefinitionV6Document = mongoose.Document & HL7TableRowDefinitionV6I

const HL7TableRowDefinitionV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  numberOfColumnsPerRow: Number,
  columnDescription: Array(String),
  
  }, { timestamps: true });
  
export interface HL7TableRowDefinitionV6I extends Segment{
  numberOfColumnsPerRow: number
  columnDescription: string[]
  
  }
  export const HL7TableRowDefinitionV6 = mongoose.model<HL7TableRowDefinitionV6Document> ("HL7TableRowDefinitionV6", HL7TableRowDefinitionV6Schema);

