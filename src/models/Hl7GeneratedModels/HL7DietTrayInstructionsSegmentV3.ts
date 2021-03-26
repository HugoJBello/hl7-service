
// Generated typescript code of HL7v 2.3 ODT  (Diet tray instructions segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DietTrayInstructionsSegmentV3Document = mongoose.Document & HL7DietTrayInstructionsSegmentV3I

const HL7DietTrayInstructionsSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  trayType: String,
  servicePeriod: Array(String),
  textInstruction: String,
  
  }, { timestamps: true });
  
export interface HL7DietTrayInstructionsSegmentV3I extends Segment{
  trayType: string
  servicePeriod: string[]
  textInstruction: string
  
  }
  export const HL7DietTrayInstructionsSegmentV3 = mongoose.model<HL7DietTrayInstructionsSegmentV3Document> ("HL7DietTrayInstructionsSegmentV3", HL7DietTrayInstructionsSegmentV3Schema);

