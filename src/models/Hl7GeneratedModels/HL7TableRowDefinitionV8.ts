
// Generated typescript code of HL7v 2.8 RDF  (Table Row Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TableRowDefinitionV8Document = mongoose.Document & HL7TableRowDefinitionV8I

const HL7TableRowDefinitionV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  numberOfColumnsPerRow: Number,
  columnDescription: Array(String),
  
  }, { timestamps: true });
  
export interface HL7TableRowDefinitionV8I extends Segment{
  numberOfColumnsPerRow: number
  columnDescription: string[]
  
  }
  export const HL7TableRowDefinitionV8 = mongoose.model<HL7TableRowDefinitionV8Document> ("HL7TableRowDefinitionV8", HL7TableRowDefinitionV8Schema);

