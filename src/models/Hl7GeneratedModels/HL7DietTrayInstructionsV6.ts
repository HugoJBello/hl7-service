
// Generated typescript code of HL7v 2.6 ODT  (Diet Tray Instructions)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DietTrayInstructionsV6Document = mongoose.Document & HL7DietTrayInstructionsV6I

const HL7DietTrayInstructionsV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  trayType: String,
  servicePeriod: Array(String),
  textInstruction: String,
  
  }, { timestamps: true });
  
export interface HL7DietTrayInstructionsV6I extends Segment{
  trayType: string
  servicePeriod: string[]
  textInstruction: string
  
  }
  export const HL7DietTrayInstructionsV6 = mongoose.model<HL7DietTrayInstructionsV6Document> ("HL7DietTrayInstructionsV6", HL7DietTrayInstructionsV6Schema);

