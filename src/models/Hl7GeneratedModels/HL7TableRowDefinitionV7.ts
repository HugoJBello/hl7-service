
// Generated typescript code of HL7v 2.7 RDF  (Table Row Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TableRowDefinitionV7Document = mongoose.Document & HL7TableRowDefinitionV7I

const HL7TableRowDefinitionV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  numberOfColumnsPerRow: Number,
  columnDescription: Array(String),
  
  }, { timestamps: true });
  
export interface HL7TableRowDefinitionV7I extends Segment{
  numberOfColumnsPerRow: number
  columnDescription: string[]
  
  }
  export const HL7TableRowDefinitionV7 = mongoose.model<HL7TableRowDefinitionV7Document> ("HL7TableRowDefinitionV7", HL7TableRowDefinitionV7Schema);

