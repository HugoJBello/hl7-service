
// Generated typescript code of HL7v 2.3 RDT  (Table Row Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TableRowDataV3Document = mongoose.Document & HL7TableRowDataV3I

const HL7TableRowDataV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  columnValue: String,
  
  }, { timestamps: true });
  
export interface HL7TableRowDataV3I extends Segment{
  columnValue: string
  
  }
  export const HL7TableRowDataV3 = mongoose.model<HL7TableRowDataV3Document> ("HL7TableRowDataV3", HL7TableRowDataV3Schema);

