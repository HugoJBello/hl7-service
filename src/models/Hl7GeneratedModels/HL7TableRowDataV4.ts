
// Generated typescript code of HL7v 2.4 RDT  (Table Row Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TableRowDataV4Document = mongoose.Document & HL7TableRowDataV4I

const HL7TableRowDataV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  columnValue: String,
  
  }, { timestamps: true });
  
export interface HL7TableRowDataV4I extends Segment{
  columnValue: string
  
  }
  export const HL7TableRowDataV4 = mongoose.model<HL7TableRowDataV4Document> ("HL7TableRowDataV4", HL7TableRowDataV4Schema);

