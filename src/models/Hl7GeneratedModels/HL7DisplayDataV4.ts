
// Generated typescript code of HL7v 2.4 DSP  (Display Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DisplayDataV4Document = mongoose.Document & HL7DisplayDataV4I

const HL7DisplayDataV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDDSP: String,
  displayLevel: String,
  dataLine: String,
  logicalBreakPoint: String,
  resultID: String,
  
  }, { timestamps: true });
  
export interface HL7DisplayDataV4I extends Segment{
  setIDDSP: string
  displayLevel: string
  dataLine: string
  logicalBreakPoint: string
  resultID: string
  
  }
  export const HL7DisplayDataV4 = mongoose.model<HL7DisplayDataV4Document> ("HL7DisplayDataV4", HL7DisplayDataV4Schema);

