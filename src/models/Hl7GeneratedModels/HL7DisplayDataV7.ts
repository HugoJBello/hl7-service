
// Generated typescript code of HL7v 2.7 DSP  (Display Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DisplayDataV7Document = mongoose.Document & HL7DisplayDataV7I

const HL7DisplayDataV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdDsp: String,
  displayLevel: String,
  dataLine: String,
  logicalBreakPoint: String,
  resultId: String,
  
  }, { timestamps: true });
  
export interface HL7DisplayDataV7I extends Segment{
  setIdDsp: string
  displayLevel: string
  dataLine: string
  logicalBreakPoint: string
  resultId: string
  
  }
  export const HL7DisplayDataV7 = mongoose.model<HL7DisplayDataV7Document> ("HL7DisplayDataV7", HL7DisplayDataV7Schema);

