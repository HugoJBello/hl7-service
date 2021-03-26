
// Generated typescript code of HL7v 2.5 RDF  (Table Row Definition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TableRowDefinitionV5Document = mongoose.Document & HL7TableRowDefinitionV5I

const HL7TableRowDefinitionV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  numberOfColumnsPerRow: Number,
  columnDescription: Array(String),
  
  }, { timestamps: true });
  
export interface HL7TableRowDefinitionV5I extends Segment{
  numberOfColumnsPerRow: number
  columnDescription: string[]
  
  }
  export const HL7TableRowDefinitionV5 = mongoose.model<HL7TableRowDefinitionV5Document> ("HL7TableRowDefinitionV5", HL7TableRowDefinitionV5Schema);

