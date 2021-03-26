
// Generated typescript code of HL7v 2.8 ODT  (Diet Tray Instructions)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DietTrayInstructionsV8Document = mongoose.Document & HL7DietTrayInstructionsV8I

const HL7DietTrayInstructionsV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  trayType: String,
  servicePeriod: Array(String),
  textInstruction: String,
  
  }, { timestamps: true });
  
export interface HL7DietTrayInstructionsV8I extends Segment{
  trayType: string
  servicePeriod: string[]
  textInstruction: string
  
  }
  export const HL7DietTrayInstructionsV8 = mongoose.model<HL7DietTrayInstructionsV8Document> ("HL7DietTrayInstructionsV8", HL7DietTrayInstructionsV8Schema);

