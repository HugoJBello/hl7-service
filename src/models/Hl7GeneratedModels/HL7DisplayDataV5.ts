
// Generated typescript code of HL7v 2.5 DSP  (Display Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DisplayDataV5Document = mongoose.Document & HL7DisplayDataV5I

const HL7DisplayDataV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDDSP: String,
  displayLevel: String,
  dataLine: String,
  logicalBreakPoint: String,
  resultID: String,
  
  }, { timestamps: true });
  
export interface HL7DisplayDataV5I extends Segment{
  setIDDSP: string
  displayLevel: string
  dataLine: string
  logicalBreakPoint: string
  resultID: string
  
  }
  export const HL7DisplayDataV5 = mongoose.model<HL7DisplayDataV5Document> ("HL7DisplayDataV5", HL7DisplayDataV5Schema);

