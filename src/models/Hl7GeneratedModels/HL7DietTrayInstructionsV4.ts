
// Generated typescript code of HL7v 2.4 ODT  (Diet Tray Instructions)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DietTrayInstructionsV4Document = mongoose.Document & HL7DietTrayInstructionsV4I

const HL7DietTrayInstructionsV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  trayType: String,
  servicePeriod: Array(String),
  textInstruction: String,
  
  }, { timestamps: true });
  
export interface HL7DietTrayInstructionsV4I extends Segment{
  trayType: string
  servicePeriod: string[]
  textInstruction: string
  
  }
  export const HL7DietTrayInstructionsV4 = mongoose.model<HL7DietTrayInstructionsV4Document> ("HL7DietTrayInstructionsV4", HL7DietTrayInstructionsV4Schema);

