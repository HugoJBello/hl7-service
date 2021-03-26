
// Generated typescript code of HL7v 2.8 RDT  (Table Row Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TableRowDataV8Document = mongoose.Document & HL7TableRowDataV8I

const HL7TableRowDataV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  columnValue: String,
  
  }, { timestamps: true });
  
export interface HL7TableRowDataV8I extends Segment{
  columnValue: string
  
  }
  export const HL7TableRowDataV8 = mongoose.model<HL7TableRowDataV8Document> ("HL7TableRowDataV8", HL7TableRowDataV8Schema);

