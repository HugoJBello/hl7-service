
// Generated typescript code of HL7v 2.6 DSP  (Display Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DisplayDataV6Document = mongoose.Document & HL7DisplayDataV6I

const HL7DisplayDataV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDDSP: String,
  displayLevel: String,
  dataLine: String,
  logicalBreakPoint: String,
  resultID: String,
  
  }, { timestamps: true });
  
export interface HL7DisplayDataV6I extends Segment{
  setIDDSP: string
  displayLevel: string
  dataLine: string
  logicalBreakPoint: string
  resultID: string
  
  }
  export const HL7DisplayDataV6 = mongoose.model<HL7DisplayDataV6Document> ("HL7DisplayDataV6", HL7DisplayDataV6Schema);

