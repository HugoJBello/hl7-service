
// Generated typescript code of HL7v 2.3 DSP  (Display data segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DisplayDataSegmentV3Document = mongoose.Document & HL7DisplayDataSegmentV3I

const HL7DisplayDataSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDDisplayData: String,
  displayLevel: String,
  dataLine: String,
  logicalBreakPoint: String,
  resultID: String,
  
  }, { timestamps: true });
  
export interface HL7DisplayDataSegmentV3I extends Segment{
  setIDDisplayData: string
  displayLevel: string
  dataLine: string
  logicalBreakPoint: string
  resultID: string
  
  }
  export const HL7DisplayDataSegmentV3 = mongoose.model<HL7DisplayDataSegmentV3Document> ("HL7DisplayDataSegmentV3", HL7DisplayDataSegmentV3Schema);

