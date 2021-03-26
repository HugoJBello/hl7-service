
// Generated typescript code of HL7v 2.8 DSP  (Display Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DisplayDataV8Document = mongoose.Document & HL7DisplayDataV8I

const HL7DisplayDataV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdDsp: String,
  displayLevel: String,
  dataLine: String,
  logicalBreakPoint: String,
  resultId: String,
  
  }, { timestamps: true });
  
export interface HL7DisplayDataV8I extends Segment{
  setIdDsp: string
  displayLevel: string
  dataLine: string
  logicalBreakPoint: string
  resultId: string
  
  }
  export const HL7DisplayDataV8 = mongoose.model<HL7DisplayDataV8Document> ("HL7DisplayDataV8", HL7DisplayDataV8Schema);

