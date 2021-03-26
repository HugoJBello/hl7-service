
// Generated typescript code of HL7v 2.2 DSP  (Display Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DisplayDataV2Document = mongoose.Document & HL7DisplayDataV2I

const HL7DisplayDataV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdDisplayData: String,
  displayLevel: String,
  dataLine: String,
  logicalBreakPoint: String,
  resultId: String,
  
  }, { timestamps: true });
  
export interface HL7DisplayDataV2I extends Segment{
  setIdDisplayData: string
  displayLevel: string
  dataLine: string
  logicalBreakPoint: string
  resultId: string
  
  }
  export const HL7DisplayDataV2 = mongoose.model<HL7DisplayDataV2Document> ("HL7DisplayDataV2", HL7DisplayDataV2Schema);

