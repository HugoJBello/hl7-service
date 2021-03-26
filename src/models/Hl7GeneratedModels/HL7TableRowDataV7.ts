
// Generated typescript code of HL7v 2.7 RDT  (Table Row Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TableRowDataV7Document = mongoose.Document & HL7TableRowDataV7I

const HL7TableRowDataV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  columnValue: String,
  
  }, { timestamps: true });
  
export interface HL7TableRowDataV7I extends Segment{
  columnValue: string
  
  }
  export const HL7TableRowDataV7 = mongoose.model<HL7TableRowDataV7Document> ("HL7TableRowDataV7", HL7TableRowDataV7Schema);

