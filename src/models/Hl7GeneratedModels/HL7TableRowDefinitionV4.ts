
// Generated typescript code of HL7v 2.4 RDF  (Table Row Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TableRowDefinitionV4Document = mongoose.Document & HL7TableRowDefinitionV4I

const HL7TableRowDefinitionV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  numberOfColumnsPerRow: Number,
  columnDescription: Array(String),
  
  }, { timestamps: true });
  
export interface HL7TableRowDefinitionV4I extends Segment{
  numberOfColumnsPerRow: number
  columnDescription: string[]
  
  }
  export const HL7TableRowDefinitionV4 = mongoose.model<HL7TableRowDefinitionV4Document> ("HL7TableRowDefinitionV4", HL7TableRowDefinitionV4Schema);

