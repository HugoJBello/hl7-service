
// Generated typescript code of HL7v 2.6 RDT  (Table Row Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TableRowDataV6Document = mongoose.Document & HL7TableRowDataV6I

const HL7TableRowDataV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  columnValue: String,
  
  }, { timestamps: true });
  
export interface HL7TableRowDataV6I extends Segment{
  columnValue: string
  
  }
  export const HL7TableRowDataV6 = mongoose.model<HL7TableRowDataV6Document> ("HL7TableRowDataV6", HL7TableRowDataV6Schema);

