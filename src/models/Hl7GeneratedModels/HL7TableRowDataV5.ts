
// Generated typescript code of HL7v 2.5 RDT  (Table Row Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TableRowDataV5Document = mongoose.Document & HL7TableRowDataV5I

const HL7TableRowDataV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  columnValue: String,
  
  }, { timestamps: true });
  
export interface HL7TableRowDataV5I extends Segment{
  columnValue: string
  
  }
  export const HL7TableRowDataV5 = mongoose.model<HL7TableRowDataV5Document> ("HL7TableRowDataV5", HL7TableRowDataV5Schema);

